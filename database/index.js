const mongoose = require("mongoose");
const { Connect } = require("./db");
const data = require('./data/recipes.json');
var uniqid = require('uniqid'); 

Connect("fakedata")

// Define a schema
const Schema = mongoose.Schema;

const RecipesSchema = new Schema({
  name: String,
  url: String,
  description: String,
  author: String,
  ingredients: Array,
  method: Array,
  date: Number,
  data1: String,
  uniqid: String
});

const recipes = mongoose.model("recipes", RecipesSchema);

async function SaveData(index){
    await recipes.create({ 
        name: data[index].Name,
        url:  data[index].url,
        description:  data[index].Description,
        author: data[index].Author,
        ingredients: data[index].Ingredients,
        method: data[index].Method,
        date:Date.now(),
        date1: Date(),
        uniqid: uniqid()
    });
}



for(var i =0; i<data.length; i++){
    SaveData(i)
    console.log(i)
}

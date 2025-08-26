import mongoose, { isValidObjectId } from "mongoose";
import { NextResponse,NextRequest } from "next/server";
import { RecipesSchema } from "../../../../../schema/recipes";

export async function GET(req: NextRequest, { params }: { params: any }) {
  try{
    const recipes = mongoose.models.recipes || mongoose.model('recipes', RecipesSchema)

    // get the id from params
    const get_params = await params

    // if id was a valid object id
    if(isValidObjectId(get_params.id)){

      const find_recipe = await recipes.findById(get_params.id)
      
      // if find the recipe
      if(find_recipe){
      return NextResponse.json(find_recipe);
      }
      else{
        return NextResponse.json({});
      }
      
    }
    
    else{
      return NextResponse.json({});
    }

  }
  catch(err){
    console.log(err)
  }
  }
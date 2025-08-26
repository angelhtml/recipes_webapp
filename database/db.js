const mongoose = require("mongoose");

const Connect = (name) => {
    const mongoDB = `mongodb://127.0.0.1/${name}`;

    main().catch((err) => console.log(err));
    async function main() {
        await mongoose.connect(mongoDB);
    }
}

exports.Connect= Connect

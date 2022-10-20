const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://Srajit:Srajit@cluster0.cpfhuks.mongodb.net/?retryWrites=true&w=majority",{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });

        console.log("MongoDb Connected")
    }catch(err){
        console.log(`Error: ${err.message}`);
        process.exit();
    }
};

module.exports = connectDB;
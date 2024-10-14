import mongoose from "mongoose";


async function connectDB(){

    try {
        
//    await mongoose.connect("mongodb://localhost:27017/nextjsauth");
await mongoose.connect("mongodb+srv://jaydipjadhavdev25:jaydipjadhavdev@cluster0.guax1.mongodb.net/nextauth");
 const connection = mongoose.connection;

 connection.on('connected' , ()=>{
      console.log("mongoose connected")
 })
 connection.on('error' , (error)=>{
    console.log("mongoose connection error  : " , error)
    process.exit();
})



    } catch (error) {
        console.log("database connection error : " , error);
        
    }




}

export default connectDB;
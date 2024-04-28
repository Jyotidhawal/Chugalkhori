import  Mongoose   from "mongoose";

const URL="mongodb://127.0.0.1:27017/shinchan-gift"
const connectionToMongo=async()=>{
    try {
        await Mongoose.connect(URL);
        console.log("Connected to Mongoodb");

    } catch (error) {
        console.log("error connecting to mongo", error.message);
        
    }   
}


export default connectionToMongo;
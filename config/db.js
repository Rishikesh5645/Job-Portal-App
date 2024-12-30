import mongoose from "mongoose";
import colors from "colors";
 
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected To MongoDb Database ${mongoose.connection.host} `.bgWhite);
      } catch (error) {
        console.log(`MongoDB Error ${error}`.bgRed.white);
      }
};
export default connectDB;

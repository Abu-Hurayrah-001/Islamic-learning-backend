//IMPORTS
import mongoose from "mongoose";

//CONSTS. AND VARS.
var retries: number = 5;
const delay: number = 5000;

//CONNECT-WITH-DB
const connectDB = async() : Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("YAY!! YAY!! MongoDB successfully connected");
    } catch (error: any) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        retries -= 1;

        if (retries === 0) {
            console.error("All retries failed!! Exiting the process...");
            process.exit(1);
        } else {
            console.log(`Retrying connection... Attempls left: ${retries}`);
            await new Promise(res => setTimeout(res, delay));
        }
    }
}

export default connectDB;
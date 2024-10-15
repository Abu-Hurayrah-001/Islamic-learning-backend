import express, {Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 8000;

//C.O.R.S. configuration
app.use(cors({
    origin: process.env.Frontend_Domain,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

//Middlewares
app.use(express.json());

//Routes
app.get("/", (req: Request, res: Response) => {
    res.send("You are not supposed to be here, GOOD SIR!!");
});

//Starting the server
app.listen(PORT, () => {
    console.log(`YAY!!Server is up and running on PORT: ${PORT}`);
});
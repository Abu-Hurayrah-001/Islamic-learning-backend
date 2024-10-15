import express, {Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 8000;

//Middlewares
app.use(express.json());

//Routes
app.get("/", (req: Request, res: Response) => {
    res.send("You are not supposed to be here, GOOD SIR!!");
});

//Starting the server
app.listen(PORT, () => {
    console.log(`Server is up and running on PORT: ${PORT}`);
})
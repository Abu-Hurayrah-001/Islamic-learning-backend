// Imports
import express, {Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

// loading .env
dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 8000;

// C.O.R.S. configuration
app.use(cors({
    origin: process.env.Frontend_Domain,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

// Rate limiting configuration
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: "Too many requests from this I.P. (Kindly come back after 15 minutes)",
    legacyHeaders: false,
});

//Middlewares
app.use(helmet());
app.use(express.json());
app.use(limiter);

// Routes
app.get("/", (req: Request, res: Response) => {
    res.send("You are not supposed to be here, GOOD SIR!!");
});

// Starting the server
app.listen(PORT, () => {
    console.log(`YAY!!Server is up and running on PORT: ${PORT}`);
});
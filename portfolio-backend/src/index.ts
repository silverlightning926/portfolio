import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { connectToDB } from "./services/dbService";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});

connectToDB()
	.then(() => {
		app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB");
	});

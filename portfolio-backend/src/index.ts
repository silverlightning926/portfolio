import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { uptime } from "process";
import { closeDBConnection, connectToDB } from "./services/dbService";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/status", (req: Request, res: Response) => {
	res.status(200).json({
		status: "OK",
		uptime: uptime(),
		environment: process.env.ENVIRONMENT,
	});
});

connectToDB()
	.then(() => {
		app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});

		const shutdown = async () => {
			console.log("Closing server...");
			await closeDBConnection();
			process.exit(0);
		};

		process.on("SIGINT", shutdown);
		process.on("SIGTERM", shutdown);
		process.on("SIGQUIT", shutdown);
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB");
	});

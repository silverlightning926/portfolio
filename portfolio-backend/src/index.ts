import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { uptime } from "process";
import { ContactInfo } from "./models/contactInfo";
import {
	closeDBConnection,
	connectToDB,
	getContactInfo,
} from "./services/dbService";

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

app.get("/contact", async (req: Request, res: Response) => {
	const contact: ContactInfo | null = await getContactInfo();

	if (!contact) {
		res.status(500).json({ error: "Internal server error" });
	}

	res.status(200).json(contact);
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
	.catch((_) => {
		console.error("Error connecting to MongoDB");
	});

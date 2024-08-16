import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { uptime } from "process";
import { ContactInfo } from "./models/contactInfo";
import { Skills } from "./models/skills";
import {
	closeDBConnection,
	connectToDB,
	getContactInfo,
	getSkills,
} from "./services/dbService";

dotenv.config();

connectToDB()
	.then(() => {
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

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("*", (req: Request, res: Response) => {
	res.status(404).json({ error: "Endpoint not found" });
});

app.get("/status", (req: Request, res: Response) => {
	res.status(200).json({
		status: "OK",
		uptime: uptime(),
		environment: process.env.ENVIRONMENT,
	});
});

app.get("/contact", async (req: Request, res: Response) => {
	const contact: ContactInfo | null = await getContactInfo();

	if (!contact) res.status(500).json({ error: "Internal server error" });

	res.status(200).json(contact);
});

app.get("/skills", async (req: Request, res: Response) => {
	const skills: Skills[] | null = await getSkills();

	if (!skills) res.status(500).json({ error: "Internal server error" });

	res.status(200).json(skills);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

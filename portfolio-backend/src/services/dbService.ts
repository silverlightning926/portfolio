import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";

const MONGO_CLIENT = new MongoClient(MONGO_URI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function connectToDB(): Promise<void> {
	try {
		await MONGO_CLIENT.connect();
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
	}
}

export { connectToDB };

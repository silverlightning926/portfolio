import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
import { ContactInfo } from "../models/contactInfo";

dotenv.config();

async function checkEnvironment() {
	if (!process.env.MONGO_URI) throw new Error("MONGO_URI is not defined");
	if (!process.env.DB_NAME) throw new Error("DB_NAME is not defined");
	if (!process.env.CONTACT_COLLECTION_NAME)
		throw new Error("CONTACT_COLLECTION_NAME is not defined");

	console.log("All DB environment variables found");
}

checkEnvironment();

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

async function closeDBConnection(): Promise<void> {
	try {
		await MONGO_CLIENT.close();
		console.log("Closed MongoDB connection");
	} catch (error) {
		console.error("Error closing MongoDB connection:", error);
	}
}

async function getContactInfo(): Promise<ContactInfo | null> {
	try {
		const db = MONGO_CLIENT.db(process.env.DB_NAME!);
		const collection = db.collection(process.env.CONTACT_COLLECTION_NAME!);
		return collection.findOne<ContactInfo>({}, { projection: { _id: 0 } });
	} catch (error) {
		console.error("Error getting contact info:", error);
		return null;
	}
}

export { closeDBConnection, connectToDB, getContactInfo };

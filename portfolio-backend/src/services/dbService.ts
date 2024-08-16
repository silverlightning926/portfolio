import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
import { ContactInfo } from "../models/contactInfo";
import { Experience } from "../models/experience";
import { Skills } from "../models/skills";

dotenv.config();

async function checkEnvironment() {
	if (!process.env.MONGO_URI) throw new Error("MONGO_URI is not defined");
	if (!process.env.DB_NAME) throw new Error("DB_NAME is not defined");
	if (!process.env.CONTACT_COLLECTION_NAME)
		throw new Error("CONTACT_COLLECTION_NAME is not defined");
	if (!process.env.SKILLS_COLLECTION_NAME)
		throw new Error("SKILLS_COLLECTION_NAME is not defined");
	if (!process.env.EXPERIENCE_COLLECTION_NAME)
		throw new Error("EXPERIENCE_COLLECTION_NAME is not defined");
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

const DB = MONGO_CLIENT.db(process.env.DB_NAME!);
const COLLECTIONS = {
	contact: DB.collection(process.env.CONTACT_COLLECTION_NAME!),
	skills: DB.collection(process.env.SKILLS_COLLECTION_NAME!),
	experience: DB.collection(process.env.EXPERIENCE_COLLECTION_NAME!),
};

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
		return COLLECTIONS.contact.findOne<ContactInfo>(
			{},
			{ projection: { _id: 0 } }
		);
	} catch (error) {
		console.error("Error getting contact info:", error);
		return null;
	}
}

async function getSkills(): Promise<Skills[] | null> {
	try {
		return COLLECTIONS.skills
			.find<Skills>({}, { projection: { _id: 0 } })
			.toArray();
	} catch (error) {
		console.error("Error getting skills: ", error);
		return null;
	}
}

async function getExperience(): Promise<Experience[] | null> {
	try {
		return COLLECTIONS.experience
			.find<Experience>({}, { projection: { _id: 0 } })
			.toArray();
	} catch (error) {
		console.error("Error getting experience: ", error);
		return null;
	}
}

export {
	closeDBConnection,
	connectToDB,
	getContactInfo,
	getExperience,
	getSkills,
};

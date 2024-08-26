import dotenv from "dotenv";
import fs from "fs";
import { MongoClient, ServerApiVersion } from "mongodb";
import {
	ContactInfo,
	Education,
	Experience,
	Project,
	Skills,
} from "@repo/shared-types";

dotenv.config();

const getMongoUri = (): string => {
	const secretPath = "/run/secrets/mongo_uri";
	if (fs.existsSync(secretPath)) {
		return fs.readFileSync(secretPath, "utf8").trim();
	}

	return process.env.MONGO_URI || "mongodb://localhost:27017";
};

const MONGO_URI = getMongoUri();

const MONGO_CLIENT = new MongoClient(MONGO_URI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

const DB = MONGO_CLIENT.db("portfolio");

const COLLECTIONS = {
	contact: DB.collection("contactInformation"),
	skills: DB.collection("skills"),
	experience: DB.collection("experience"),
	projects: DB.collection("projects"),
	education: DB.collection("education"),
};

async function connectToDB(): Promise<void> {
	try {
		await MONGO_CLIENT.connect();
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Error connecting to MongoDB");
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
			{ projection: { _id: 0 } },
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

async function getProjects(): Promise<Project[] | null> {
	try {
		return COLLECTIONS.projects
			.find<Project>({}, { projection: { _id: 0 } })
			.toArray();
	} catch (error) {
		console.error("Error getting projects: ", error);
		return null;
	}
}

async function getEducation(): Promise<Education[] | null> {
	try {
		return COLLECTIONS.education
			.find<Education>({}, { projection: { _id: 0 } })
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
	getEducation,
	getExperience,
	getProjects,
	getSkills,
};

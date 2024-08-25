import axios from "axios";
import type { ContactInfo } from "../../types/contactInfo";
import type { Skills } from "../../types/skills";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
	const API_URL = import.meta.env.VITE_API_URL;

	if (!API_URL) {
		throw new Error("API_URL not defined");
	}

	const response = await Promise.all([
		axios.get<ContactInfo>(`${API_URL}/contact`),
		axios.get<Skills[]>(`${API_URL}/skills`),
	]);

	const contactInfo = response[0].data;
	const skillsInfo = response[1].data;

	return {
		contactInfo: contactInfo,
		skillsInfo: skillsInfo,
	};
}) satisfies PageServerLoad;

import type { ContactInfo } from "@repo/shared-types";
import axios from "axios";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
	const API_URL = import.meta.env.VITE_API_URL;

	if (!API_URL) {
		throw new Error("API_URL not defined");
	}

	const response = await axios.get<ContactInfo>(`${API_URL}/contact`);
	const contactInfo = response.data;

	return {
		contactInfo: contactInfo,
	};
}) satisfies PageServerLoad;

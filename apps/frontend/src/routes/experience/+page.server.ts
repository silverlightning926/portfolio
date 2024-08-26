import type { Experience } from "@repo/shared-types";
import axios from "axios";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
	const API_URL = import.meta.env.VITE_API_URL;

	if (!API_URL) {
		throw new Error("API_URL not defined");
	}

	const response = await axios.get<Experience[]>(`${API_URL}/experience`);
	const experience = response.data;

	return {
		experience: experience,
	};
}) satisfies PageServerLoad;

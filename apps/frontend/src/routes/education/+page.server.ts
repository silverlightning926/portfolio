import axios from "axios";
import type { Education } from "../../types/education";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
	const API_URL = import.meta.env.VITE_API_URL;

	if (!API_URL) {
		throw new Error("API_URL not defined");
	}

	const response = await axios.get<Education>(`${API_URL}/education`);
	const education = response.data;

	return {
		education: education,
	};
}) satisfies PageServerLoad;

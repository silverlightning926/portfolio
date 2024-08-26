import type { Project } from "@repo/shared-types";
import axios from "axios";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
	const API_URL = import.meta.env.VITE_API_URL;

	if (!API_URL) {
		throw new Error("API_URL not defined");
	}

	const response = await axios.get<Project[]>(`${API_URL}/projects`);
	const projects = response.data;

	return {
		projects: projects,
	};
}) satisfies PageServerLoad;

import { z } from "zod";

const ProjectSchema = z.object({
	name: z.string(),
	bulletPoints: z.array(z.string()),
});

export type Project = z.infer<typeof ProjectSchema>;
export { ProjectSchema };

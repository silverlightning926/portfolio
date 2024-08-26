import { z } from "zod";

const SkillsSchema = z.object({
	category: z.string(),
	skills: z.array(z.string()),
});

export type Skills = z.infer<typeof SkillsSchema>;
export { SkillsSchema };

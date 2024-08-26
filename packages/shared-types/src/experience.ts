import { z } from "zod";

const ExperienceSchema = z.object({
	title: z.string(),
	employmentType: z.string(),
	company: z.string(),
	location: z.string(),
	startDate: z.string(),
	endDate: z.string(),
	bulletPoints: z.array(z.string()),
});

export type Experience = z.infer<typeof ExperienceSchema>;
export { ExperienceSchema };

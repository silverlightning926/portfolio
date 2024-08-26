import { z } from "zod";

const EducationSchema = z.object({
	school: z.string(),
	degree: z.string(),
	fieldOfStudy: z.string(),
	startDate: z.string(),
	endDate: z.string(),
	bulletPoints: z.array(z.string()),
});

export type Education = z.infer<typeof EducationSchema>;
export { EducationSchema };

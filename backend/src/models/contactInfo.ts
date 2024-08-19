import { z } from "zod";

const ContactInfoSchema = z.object({
	name: z.string(),
	nickname: z.string(),
	title: z.string(),
	email: z.string(),
	phoneNumber: z.string(),
	location: z.string(),
	links: z.object({
		linkedin: z.string(),
		github: z.string(),
	}),
});

export type ContactInfo = z.infer<typeof ContactInfoSchema>;

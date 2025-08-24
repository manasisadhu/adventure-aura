import { z } from "zod";
export const contactSchema = z.object({
	userName: z.string().min(1),
	userMail: z.email(),
	mobileNo: z
		.string()
		.max(10, { message: "Please Enter a Valid Phone Number" })
		.min(10, { message: "Please Enter a Valid Phone Number" }),
	message: z
		.string()
		.min(10, { message: "Message must be at least 10 characters long." })
		.max(500, { message: "Message cannot exceed 500 characters." })
		.optional(),
});

export type contactSchemaType = z.infer<typeof contactSchema>;

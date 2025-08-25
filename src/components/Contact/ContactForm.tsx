"use client";
import { contactSchema, contactSchemaType } from "@/lib/schema";
import { Web3FormsResponse } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import ky from "ky";
import { Loader, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../shadcnui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../shadcnui/form";
import { Input } from "../shadcnui/input";
import { Textarea } from "../shadcnui/textarea";

const ContactForm = () => {
	const CForm = useForm<contactSchemaType>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			userName: "",
			userMail: "",
			mobileNo: "",
			message: "",
		},
		mode: "onSubmit",
	});

	const dataSubmit = async (fdata: contactSchemaType) => {
		console.log(fdata);

		const userData = {
			...fdata,
			access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
		};

		const res = await ky
			.post("https://api.web3forms.com/submit", {
				json: userData,
			})
			.json<Web3FormsResponse>();
		if (res.success) {
			CForm.reset();
			toast("Your Form has been submitted successfully!");
		} else {
			toast("There was an error submitting the form. Please try again.");
		}
	};
	return (
		<>
			<Form {...CForm}>
				<form
					onSubmit={CForm.handleSubmit(dataSubmit)}
					className="w-full space-y-4 lg:ps-6">
					<FormField
						control={CForm.control}
						name="userName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Enter your name"
										className="py-6"
										required
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={CForm.control}
						name="userMail"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Mail</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Enter your Email"
										className="py-6"
										required
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={CForm.control}
						name="mobileNo"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Mobile Number</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Enter your Number"
										className="py-6"
										required
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={CForm.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										placeholder="Type your message..."
										className="pb-20"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						className="flex cursor-pointer items-center justify-center gap-2 bg-amber-500 px-4 text-white hover:bg-orange-400"
						disabled={CForm.formState.isSubmitting}>
						{CForm.formState.isSubmitting ? (
							<>
								<Loader className="mr-2 animate-spin" />
								Sending
							</>
						) : (
							<>
								<Send />
								Send Message
							</>
						)}
					</Button>
				</form>
			</Form>
		</>
	);
};

export default ContactForm;

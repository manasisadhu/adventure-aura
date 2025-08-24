"use client";
import { contactSchema, contactSchemaType } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

	const dataSubmit = (fdata: contactSchemaType) => {
		console.log(fdata);
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
						className="flex cursor-pointer items-center justify-center gap-2 bg-amber-500 px-4 text-white hover:bg-orange-400">
						Submit
					</Button>
				</form>
			</Form>
		</>
	);
};

export default ContactForm;

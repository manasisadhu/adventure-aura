import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { LocationEditIcon, Mail, PhoneCall } from "lucide-react";
const CradsDisplay = () => {
	return (
		<>
			<Card>
				<CardHeader className="flex flex-col items-center justify-center">
					<div className="rounded-full bg-orange-400 p-5">
						<LocationEditIcon color="white" />
					</div>
					<CardTitle className="text-2xl">Address</CardTitle>
					<CardDescription className="text-center text-lg">
						455 West Orchard Street Kings Mountain, NC 280867
					</CardDescription>
				</CardHeader>
			</Card>
			<Card>
				<CardHeader className="flex flex-col items-center justify-center">
					<div className="rounded-full bg-orange-400 p-5">
						<PhoneCall color="white" />
					</div>
					<CardTitle className="text-2xl">Phone</CardTitle>
					<CardDescription className="text-center text-lg">
						+088 (246) 642-27-10
					</CardDescription>
				</CardHeader>
			</Card>
			<Card>
				<CardHeader className="flex flex-col items-center justify-center">
					<div className="rounded-full bg-orange-400 p-5">
						<Mail color="white" />
					</div>
					<CardTitle className="text-2xl">Email</CardTitle>
					<CardDescription className="text-center text-lg">
						Adventureaura@gmail.com
					</CardDescription>
				</CardHeader>
			</Card>
		</>
	);
};

export default CradsDisplay;

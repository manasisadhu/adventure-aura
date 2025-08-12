import { Earth, Headset, UserPen, Users } from "lucide-react";
import { Badge } from "../shadcnui/badge";

const Abouthero = () => {
	return (
		<>
			<div className="bg-[url('/about/about-hero.jpg')] bg-cover bg-center bg-no-repeat">
				<div className="flex h-dvh flex-col items-center justify-center bg-black/40 text-center">
					<div className="mx-auto max-w-7xl space-y-6 px-6 py-10">
						<Badge className="rounded-4xl bg-white/30 px-8 py-1 text-lg text-white">
							ABOUT US
						</Badge>
						<div className="w-auto text-4xl font-bold text-white md:text-7xl lg:w-4xl">
							Established with a passion for exploration
						</div>
					</div>
				</div>
			</div>
			<div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-6 px-6 py-10 text-center lg:grid-cols-4">
				<div>
					<Users
						size={34}
						className="mx-auto"
					/>
					<div className="text-4xl font-semibold">10+</div>
					<div>Years of Experience</div>
				</div>
				<div>
					<Earth
						size={34}
						className="mx-auto"
					/>
					<div className="text-4xl font-semibold">500+</div>
					<div>Destinations</div>
				</div>
				<div>
					<Headset
						size={34}
						className="mx-auto"
					/>
					<div className="text-4xl font-semibold">24/7+</div>
					<div>Customer Support</div>
				</div>
				<div>
					<UserPen
						size={34}
						className="mx-auto"
					/>
					<div className="text-4xl font-semibold">98%</div>
					<div>Happy Clients</div>
				</div>
			</div>
		</>
	);
};

export default Abouthero;

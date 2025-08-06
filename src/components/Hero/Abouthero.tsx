import { BadgePercent, BookCheck, HeartPlus } from "lucide-react";
import { Button } from "../shadcnui/button";

const Hero = () => {
	return (
		<>
			<div className="flex h-dvh flex-col items-center justify-center gap-4 bg-purple-500 bg-cover bg-fixed bg-center bg-no-repeat">
				<Button className="rounded-2xl bg-amber-50">
					SAY HELLO TO NEW DESTINATIONS
				</Button>
				<div className="text-6xl font-bold">READY TO EXPLORE ?</div>
				<div className="text-6xl font-bold">CONTACT US !</div>

				<div className="flex gap-2">
					<BookCheck size={24} />
					<div className="">Trusted Partner</div>
					<HeartPlus size={24} />
					<div className="">24/7 Support</div>
					<BadgePercent size={24} />
					<div className="">Best Price Guarantee</div>
				</div>
			</div>
		</>
	);
};

export default Hero;

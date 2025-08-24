import { BadgePercent, BookCheck, HeartPlus } from "lucide-react";
import Badges from "../customui/Badges";

const ContactHero = () => {
	return (
		<div className="bg-[url('/contact/contact-hero.jpg')] bg-cover bg-center bg-no-repeat">
			<div className="bg-black/60">
				<div className="mx-auto flex h-[80dvh] max-w-7xl flex-col items-center justify-center gap-6 px-6 text-center md:h-[94dvh] lg:h-dvh">
					<Badges className="text-md rounded-4xl bg-white/30 text-white">
						SAY HELLO TO NEW DESTINATIONS
					</Badges>
					<div className="text-center text-white">
						<div className="text-4xl font-bold md:text-5xl lg:text-6xl">
							READY TO EXPLORE
						</div>
						<div className="text-4xl font-bold md:text-5xl lg:text-6xl">
							CONTACT US !
						</div>
					</div>

					<div className="mt-4 flex flex-wrap justify-center gap-3 text-lg text-white">
						<div className="flex items-center gap-2">
							<BookCheck size={24} />
							<div className="">Trusted Partner</div>
						</div>
						<div className="flex items-center gap-2">
							<HeartPlus size={24} />
							<div className="">24/7 Support</div>
						</div>

						<div className="flex items-center gap-2">
							<BadgePercent size={24} />
							<div className="">Best Price Guarantee</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactHero;

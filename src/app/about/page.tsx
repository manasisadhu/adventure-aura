import About from "@/components/About/About";
import Custom from "@/components/About/Custom";
import Destination from "@/components/About/Destination";
import OurAchivements from "@/components/About/OurAchivements";
import Abouthero from "@/components/Hero/Abouthero";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "about | Nextjs Starter Template",
	description:
		"Adventure Aura is a travel space created to inspire explorers and dreamers. Our goal is to share stories, tips, and guides that help you discover new destinations, embrace unique cultures, and create unforgettable memories. Whether you seek adventure, relaxation, or hidden gems, Adventure Aura is here to make your journey meaningful.",
};

const page = () => {
	return (
		<section>
			{/* hero  */}
			<Abouthero />

			{/* achivements  */}
			<section className="pt-14 md:pt-18">
				<h1 className="pb-3 text-center text-4xl font-bold">
					Our Achivements
				</h1>
				<OurAchivements />
			</section>

			{/* customized  */}
			<Custom />
			{/* about us */}
			<About />
			{/* destinaton  */}
			<Destination />
		</section>
	);
};

export default page;

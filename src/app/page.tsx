import Hero from "@/components/Hero/Hero";
import About from "@/components/Home/About";
import Destination from "@/components/Home/Destination";
import Package from "@/components/Home/Package";
import Review from "@/components/Home/Review";
import Us from "@/components/Home/Us";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Nextjs Starter Template",
	description: "Home page of Nextjs Starter Template",
};

const page = () => {
	return (
		<>
			<section className="">
				{/* hero  */}
				<Hero />
				{/* package  */}
				<Package />
				{/* about us  */}
				<About />
				{/* destinations  */}
				<Destination />
				{/* why us  */}
				<Us />
				{/* review  */}
				<section className="mx-auto max-w-7xl px-6 py-20">
					<Review />
				</section>
			</section>
		</>
	);
};

export default page;

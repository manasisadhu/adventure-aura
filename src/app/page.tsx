import Hero from "@/components/Hero/Hero";
import Package from "@/components/Packages/Package";
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
			</section>
		</>
	);
};

export default page;

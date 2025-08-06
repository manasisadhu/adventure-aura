import Hero from "@/components/Hero/Hero";
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
			</section>
		</>
	);
};

export default page;

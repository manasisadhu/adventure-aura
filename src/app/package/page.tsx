import Packagehero from "@/components/Hero/Packagehero";
import Pack from "@/components/Package/Pack";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "packages | Adventure Aura",
	description:
		"Discover our carefully crafted travel packages designed to suit every kind of explorer. Whether you’re seeking thrilling adventures, peaceful retreats, or cultural escapes, Adventure Aura has the perfect journey waiting for you.",
};

const page = () => {
	return (
		<section className="space-y-6">
			{/* hero     */}
			<Packagehero />
			{/* map  */}
			<div className="py-18">
				<Pack />
			</div>
		</section>
	);
};

export default page;

import ContactUi from "@/components/Contact/ContactUi";
import CradsDisplay from "@/components/Contact/CradsDisplay";
import ContactHeroUi from "@/components/Hero/ContactHeroUi";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "contact | Nextjs Starter Template",
	description:
		"We’d love to hear from you! Whether you have questions, suggestions, or just want to share your travel stories, Adventure Aura is here to connect. Reach out to us anytime—we’re happy to help and inspire your next journey.",
};

const page = () => {
	return (
		<section>
			{/* hero */}
			<ContactHeroUi />
			{/* contact sec  */}
			<div className="mx-auto max-w-7xl px-6 py-14">
				<ContactUi />
			</div>
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-14 md:grid-cols-3">
				<CradsDisplay />
			</div>
		</section>
	);
};

export default page;

import ContactUi from "@/components/Contact/ContactUi";
import CradsDisplay from "@/components/Contact/CradsDisplay";
import ContactHero from "@/components/Hero/ContactHero";

const page = () => {
	return (
		<section>
			{/* hero */}
			<ContactHero />

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

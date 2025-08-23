import Packagehero from "@/components/Hero/Packagehero";
import Pack from "@/components/Package/Pack";

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

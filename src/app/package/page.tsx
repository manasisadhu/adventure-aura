import Packagehero from "@/components/Hero/Packagehero";
import Pack from "@/components/Package/Pack";

const page = () => {
	return (
		<section className="space-y-6">
			{/* hero     */}
			<Packagehero />
			{/* map  */}
			<Pack />
		</section>
	);
};

export default page;

import About from "@/components/About/About";
import Custom from "@/components/About/Custom";
import Destination from "@/components/About/Destination";
import OurAchivements from "@/components/About/OurAchivements";
import Abouthero from "@/components/Hero/Abouthero";

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

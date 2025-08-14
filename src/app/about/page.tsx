import About from "@/components/About/About";
import Custom from "@/components/About/Custom";
import Abouthero from "@/components/Hero/Abouthero";

const page = () => {
	return (
		<>
			{/* hero  */}
			<Abouthero />
			{/* customized  */}
			<Custom />
			{/* about us */}
			<About />
		</>
	);
};

export default page;

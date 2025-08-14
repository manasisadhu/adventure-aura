import About from "@/components/About/About";
import Custom from "@/components/About/Custom";
import Destination from "@/components/About/Destination";
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
			{/* destinaton  */}
			<Destination />
		</>
	);
};

export default page;

import Image from "next/image";
import { Badge } from "../shadcnui/badge";
const Destination = () => {
	return (
		<>
			<Badge className="rounded-4xl bg-orange-400/20 px-4 py-2 text-2xl font-medium text-orange-600 dark:bg-white/20 dark:text-white">
				Trending Packages
			</Badge>
			<div className="text-center text-3xl font-bold md:text-5xl">
				Destinations You Don’t Wanna Miss
			</div>

			<div className="flex flex-col items-center justify-center gap-3 md:flex-row">
				<Image
					src={"/about/about-destination-11.jpg"}
					alt="pic"
					height={200}
					width={200}
					className="rounded-5xl"
				/>
				<Image
					src={"/about/about-destination-12.jpg"}
					alt="pic"
					height={200}
					width={200}
					className=""
				/>
				<Image
					src={"/about/about-destination-13.jpg"}
					alt="pic"
					height={200}
					width={200}
					className=""
				/>
			</div>
		</>
	);
};

export default Destination;

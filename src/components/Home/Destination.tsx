import { ChevronsRight } from "lucide-react";
import Badges from "../customui/Badges";
import CommonBtn from "../customui/CommonBtn";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

const destination = () => {
	const imageUrl = "/home/home-destination1.jpg";
	const image = "/home/home-destination2-1.jpg";
	const Url = "/home/home-destination3.jpg";
	const pic = "/home/home-destination4.jpg";
	const box = "/home/home-destination5-1.jpg";
	return (
		<section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
			<div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-3">
				<div className="grid grid-cols-1 place-items-center gap-6 text-center md:place-items-start md:text-start">
					<Badges className="text-xl font-medium dark:bg-orange-400/25 dark:text-orange-400">
						Choose Your Place
					</Badges>
					<div className="text-5xl font-bold">
						Popular Destinations
					</div>
					<div className="font-medium text-black/70 dark:text-white/50">
						Join us as we explore the wonders of the globe, one
						incredible journey at a time.
					</div>
					<CommonBtn
						className=""
						href="/package">
						Start Planing
						<ChevronsRight className="mt-0.5" />
					</CommonBtn>
				</div>

				{/* img  */}

				<DirectionAwareHover
					imageUrl={imageUrl}
					className="aspect-auto">
					<p className="text-xl font-bold">Amazon Forest</p>
				</DirectionAwareHover>

				{/* img 2  */}

				<DirectionAwareHover
					imageUrl={image}
					className="aspect-auto">
					<p className="text-xl font-bold">New Zealand</p>
				</DirectionAwareHover>

				{/* img 3  */}

				<DirectionAwareHover
					imageUrl={Url}
					className="aspect-auto">
					<p className="text-xl font-bold">London</p>
				</DirectionAwareHover>

				{/* img 4 */}

				<DirectionAwareHover
					imageUrl={pic}
					className="aspect-auto">
					<p className="text-xl font-bold">Europe</p>
				</DirectionAwareHover>

				{/* img 5*/}

				<DirectionAwareHover
					imageUrl={box}
					className="aspect-auto">
					<p className="text-xl font-bold">Africa</p>
				</DirectionAwareHover>
			</div>
		</section>
	);
};

export default destination;

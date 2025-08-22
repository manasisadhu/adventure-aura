import Image from "next/image";
import Badges from "../customui/Badges";
const Destination = () => {
	return (
		<section className="mx-auto max-w-7xl space-y-6 px-6 pt-14 pb-8 text-center">
			<Badges className="text-xl font-medium dark:bg-orange-400/25 dark:text-orange-400">
				Trending Packages
			</Badges>
			<div className="text-3xl font-bold md:text-5xl">
				Destinations You Don&apos;t Wanna Miss
			</div>

			<div className="grid grid-cols-1 pt-6 md:grid-cols-3 md:gap-10">
				<div className="">
					<Image
						src={"/about/about-destination-11.jpg"}
						alt="pic"
						height={800}
						width={800}
						className="h-auto w-full rounded-3xl"
					/>
					<div className="relative bottom-20 px-8 text-white">
						<div className="text-start text-2xl">Bali</div>
						<div className="flex items-center justify-between text-lg">
							<div className="">Indonesia</div>
							<div className="">3 Packages</div>
						</div>
					</div>
				</div>

				<div className="">
					<Image
						src={"/about/about-destination-12.jpg"}
						alt="pic"
						height={800}
						width={800}
						className="h-auto w-full rounded-3xl"
					/>

					<div className="relative bottom-20 px-8 text-white">
						<div className="text-start text-2xl">Bali</div>
						<div className="flex items-center justify-between text-lg">
							<div className="">Indonesia</div>
							<div className="">3 Packages</div>
						</div>
					</div>
				</div>
				<div className="">
					<Image
						src={"/about/about-destination-13.jpg"}
						alt="pic"
						height={800}
						width={800}
						className="h-auto w-full rounded-3xl"
					/>
					<div className="relative bottom-20 px-8 text-white">
						<div className="text-start text-2xl">Bali</div>
						<div className="flex items-center justify-between text-lg">
							<div className="">Indonesia</div>
							<div className="">3 Packages</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Destination;

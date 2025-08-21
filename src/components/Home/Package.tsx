import Badges from "../customui/Badges";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

const Package = () => {
	const imageUrl = "/home/pack.jpg";
	const image = "/home/pack2.jpg";
	const Url = "/home/raja.jpg";
	return (
		<section className="mx-auto max-w-7xl space-y-9 px-6 pt-14 md:pt-18">
			<div className="space-y-8 text-center">
				<Badges className="text-xl font-medium dark:bg-orange-400/25 dark:text-orange-400">
					POPULAR DESTINATIONS
				</Badges>
				<div className="text-5xl font-bold">Handpicked Packages</div>
			</div>

			<div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
				{/* img  */}

				<DirectionAwareHover imageUrl={imageUrl}>
					<p className="text-xl font-bold">Spain</p>
					<p className="text-sm font-normal">From $2,499</p>
				</DirectionAwareHover>

				{/* img 2  */}

				<DirectionAwareHover imageUrl={image}>
					<p className="text-xl font-bold">Australia</p>
					<p className="text-sm font-normal">From $2,499</p>
				</DirectionAwareHover>

				{/* img 3  */}

				<DirectionAwareHover imageUrl={Url}>
					<p className="text-xl font-bold">Egypt</p>
					<p className="text-sm font-normal">From $2,499</p>
				</DirectionAwareHover>
			</div>
		</section>
	);
};

export default Package;

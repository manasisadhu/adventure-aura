import { Badge } from "../shadcnui/badge";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

const destination = () => {
	const imageUrl = "/home/home-destination1.jpg";
	const image = "/home/home-destination2-1.jpg";
	const Url = "/home/home-destination3.jpg";
	const pic = "/home/home-destination4.jpg";
	const box = "/home/home-destination5-1.jpg";
	return (
		<section className="mx-auto max-w-7xl px-6 py-18">
			<div className="space-y-6">
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<div className="space-y-8 text-center">
						<Badge className="rounded-4xl bg-orange-400/20 p-4 text-2xl font-medium text-orange-600">
							Choose Your Place
						</Badge>
						<div className="text-5xl font-bold">
							Popular Destinations
						</div>
						<div className="font-medium text-black/50">
							Join us as we explore the wonders of the globe, one
							incredible journey at a time.
						</div>
					</div>
					{/* img  */}

					<DirectionAwareHover imageUrl={imageUrl}>
						<p className="text-xl font-bold">Amazon Forest</p>
					</DirectionAwareHover>

					{/* img 2  */}

					<DirectionAwareHover imageUrl={image}>
						<p className="text-xl font-bold">New Zealand</p>
					</DirectionAwareHover>
				</div>
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					{/* img 3  */}

					<DirectionAwareHover imageUrl={Url}>
						<p className="text-xl font-bold">London</p>
					</DirectionAwareHover>

					{/* img 4 */}

					<DirectionAwareHover imageUrl={pic}>
						<p className="text-xl font-bold">Europe</p>
					</DirectionAwareHover>

					{/* img 5*/}

					<DirectionAwareHover imageUrl={box}>
						<p className="text-xl font-bold">Africa</p>
					</DirectionAwareHover>
				</div>
			</div>
		</section>
	);
};

export default destination;

import { Badge } from "../shadcnui/badge";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

const destination = () => {
	const imageUrl = "/home/home-destination1.jpg";
	const image = "/home/home-destination2-1.jpg";
	const Url = "/home/home-destination3.jpg";
	const pic = "/home/home-destination4.jpg";
	const box = "/home/home-destination5-1.jpg";
	return (
		<section className="">
			<div className="">
				<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-18 md:flex-row">
					<div className="space-y-8 text-center">
						<Badge className="mt-10 rounded-4xl bg-orange-400/20 p-4 text-2xl font-medium text-orange-600">
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
					<div className="z-[-10] flex items-center justify-center">
						<DirectionAwareHover imageUrl={imageUrl}>
							<p className="text-xl font-bold">Amazon Forest</p>
						</DirectionAwareHover>
					</div>
					{/* img 2  */}
					<div className="z-[-10] flex items-center justify-center">
						<DirectionAwareHover imageUrl={image}>
							<p className="text-xl font-bold">New Zealand</p>
						</DirectionAwareHover>
					</div>
				</div>
				<div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 md:flex-row">
					{/* img 3  */}
					<div className="z-[-10] flex items-center justify-center">
						<DirectionAwareHover imageUrl={Url}>
							<p className="text-xl font-bold">London</p>
						</DirectionAwareHover>
					</div>

					{/* img 4 */}
					<div className="z-[-10] flex items-center justify-center">
						<DirectionAwareHover imageUrl={pic}>
							<p className="text-xl font-bold">Europe</p>
						</DirectionAwareHover>
					</div>
					{/* img 5*/}
					<div className="z-[-10] flex items-center justify-center">
						<DirectionAwareHover imageUrl={box}>
							<p className="text-xl font-bold">Africa</p>
						</DirectionAwareHover>
					</div>
				</div>
			</div>
		</section>
	);
};

export default destination;

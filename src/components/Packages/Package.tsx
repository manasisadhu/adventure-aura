import { Badge } from "../shadcnui/badge";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

const Package = () => {
	const imageUrl = "/home/pack.jpg";
	const image = "/home/pack2.jpg";
	const Url = "/home/pack3.jpg";
	return (
		<section className="">
			<div className="flex flex-col items-center justify-center gap-5">
				<Badge className="mt-10 rounded-3xl bg-amber-600/40 p-4 font-bold text-orange-600">
					popular destinations
				</Badge>
				<div className="text-5xl font-bold">Handpicked Packages</div>
			</div>

			<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-10">
				{/* img  */}
				<div className="relative flex h-[40rem] items-center justify-center">
					<DirectionAwareHover imageUrl={imageUrl}>
						<p className="text-xl font-bold">Spain</p>
						<p className="text-sm font-normal">From $2,499</p>
					</DirectionAwareHover>
				</div>
				{/* img 2  */}
				<div className="relative flex h-[40rem] items-center justify-center">
					<DirectionAwareHover imageUrl={image}>
						<p className="text-xl font-bold">Australia</p>
						<p className="text-sm font-normal">From $2,499</p>
					</DirectionAwareHover>
				</div>
				{/* img 3  */}
				<div className="relative flex h-[40rem] items-center justify-center">
					<DirectionAwareHover imageUrl={Url}>
						<p className="text-xl font-bold">Egypt</p>
						<p className="text-sm font-normal">From $2,499</p>
					</DirectionAwareHover>
				</div>
			</div>
		</section>
	);
};

export default Package;

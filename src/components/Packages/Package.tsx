import { Badge } from "../shadcnui/badge";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

const Package = () => {
	const imageUrl = "/home/pack.jpg";
	const image = "/home/pack2.jpg";
	const Url = "/home/raja.jpg";
	return (
		<section className="">
			<div className="space-y-8 text-center">
				<Badge className="mt-10 rounded-3xl bg-orange-400/20 p-4 font-bold text-orange-600">
					popular destinations
				</Badge>
				<div className="text-5xl font-bold">Handpicked Packages</div>
			</div>

			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-18 md:flex-row">
				{/* img  */}
				<div className="z-[-10] flex items-center justify-center">
					<DirectionAwareHover imageUrl={imageUrl}>
						<p className="text-xl font-bold">Spain</p>
						<p className="text-sm font-normal">From $2,499</p>
					</DirectionAwareHover>
				</div>
				{/* img 2  */}
				<div className="z-[-10] flex items-center justify-center">
					<DirectionAwareHover imageUrl={image}>
						<p className="text-xl font-bold">Australia</p>
						<p className="text-sm font-normal">From $2,499</p>
					</DirectionAwareHover>
				</div>
				{/* img 3  */}
				<div className="z-[-10] flex items-center justify-center">
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

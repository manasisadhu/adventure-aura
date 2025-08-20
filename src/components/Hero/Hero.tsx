import { ChevronsRight, CirclePlay } from "lucide-react";
import CommonBtn from "../customui/CommonBtn";
import { Badge } from "../shadcnui/badge";

const Hero = () => {
	return (
		<div className="bg-[url('/home/hero.jpg')] bg-cover bg-center bg-no-repeat">
			<div className="flex h-dvh flex-col justify-center bg-black/40 text-center text-white md:text-start">
				<div className="mx-auto w-full max-w-7xl space-y-6 px-6">
					<Badge className="rounded-4xl bg-white/30 p-2 text-white">
						Experience Luxury Travel
					</Badge>
					<div className="w-auto text-3xl font-bold md:w-2xl md:text-6xl">
						Explore the World Like Never Before
					</div>
					<div className="w-auto text-lg text-white/85 md:w-3xl lg:text-xl">
						Curated journeys to the worlds most extraordinary
						destinations. Let us transform your travel dreams into
						unforgettable memories.
					</div>

					<div className="flex justify-center gap-4 md:justify-start">
						<div className="">
							<CommonBtn
								href={"/contact"}
								className="cursor-pointer bg-amber-500 px-4 text-white hover:bg-orange-400">
								Start Planing with us
								<ChevronsRight className="mt-0.5" />
							</CommonBtn>
						</div>
						<div className="">
							<CommonBtn
								href={"/"}
								className="cursor-pointer bg-white/20 px-4 text-white backdrop-blur-md hover:bg-orange-400/20">
								<CirclePlay className="mt-0.5" />
								Watch Video
							</CommonBtn>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

<div className="flex gap-2"></div>;

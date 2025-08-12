import { SquareArrowRight, SquarePlay } from "lucide-react";
import { Badge } from "../shadcnui/badge";
import { Button } from "../shadcnui/button";

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

					<div className="space-x-6">
						<Button className="bg-orange-400 p-6 text-white hover:bg-amber-500">
							Start planning
							<SquareArrowRight size={24} />
						</Button>
						<Button className="bg-white/30 p-6 text-white hover:bg-amber-600">
							<SquarePlay size={24} />
							Watch Video
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

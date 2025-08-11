import { SquareArrowRight, SquarePlay } from "lucide-react";
import { Badge } from "../shadcnui/badge";
import { Button } from "../shadcnui/button";

const Hero = () => {
	return (
		<>
			<div className="bg-[url('/home/hero.jpg')] bg-cover bg-center bg-no-repeat">
				<div className="flex h-dvh flex-col justify-center bg-black/40 text-white">
					<div className="mx-auto w-full max-w-7xl space-y-6 px-6 py-10">
						<Badge className="rounded-4xl bg-white/30 p-2 text-white">
							Experience Luxury Travel
						</Badge>
						<div className="text-6xl font-bold">
							Explore the World <br />
							Like Never Before
						</div>
						<div className="text-2xl">
							Curated journeys to the worlds most extraordinary
							destinations. Let us transform <br />
							your travel dreams into unforgettable memories.
						</div>

						<div className="flex flex-col gap-5 md:flex-row">
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
		</>
	);
};

export default Hero;

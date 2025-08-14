import { SquareArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../shadcnui/button";

const About = () => {
	return (
		<>
			<section className="bg-yellow-200/20">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 py-10 lg:grid-cols-2">
					{/* coloms 1  */}
					<div className="grid grid-cols-1 gap-5 md:col-span-1 md:grid-cols-2">
						<div className="space-y-4">
							<Image
								src={"/about/about-us11.jpg"}
								height={400}
								width={400}
								alt="Image-01"
								className="h-auto w-full rounded-3xl md:h-auto"
							/>

							<Image
								src={"/about/about-us12.jpg"}
								height={400}
								width={400}
								alt="Image-02"
								className="h-auto w-full rounded-3xl md:h-[300]"
							/>
						</div>
						<div className="space-y-4">
							<Image
								src={"/about/about-us13.jpg"}
								height={400}
								width={400}
								alt="Image-03"
								className="h-auto w-full rounded-3xl md:h-[300]"
							/>

							<Image
								src={"/about/about-us14.jpg"}
								height={400}
								width={400}
								alt="Image-04"
								className="h-auto w-full rounded-3xl md:h-[180]"
							/>
						</div>
					</div>
					{/* colomns 2 */}
					<div className="space-y-6 lg:w-lg">
						<div className="font-primary text-2xl font-[800] md:text-5xl">
							We Make Travel Accessible and Enjoyable
						</div>
						<div className="h-0.5 w-12 bg-orange-700"></div>
						<div className="font-black/65 font-secondary mb-10 text-[16px]">
							Our mission is to make travel accessible and
							enjoyable for all. That's why we pride ourselves on
							being budget-friendly, without compromising on
							quality or experience. Our partnerships with trusted
							local guides and accommodations ensure that you
							receive the best value wherever you go.
						</div>
						<Button className="bg-orange-400 px-6 py-5 text-white hover:bg-amber-500">
							Start planning
							<SquareArrowRight size={24} />
						</Button>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;

import { CircleArrowRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcnui/avatar";
import { Badge } from "../shadcnui/badge";
import { Button } from "../shadcnui/button";

const About = () => {
	return (
		<section className="bg-amber-400/10 dark:bg-black/20">
			<div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-32 px-6 py-10 md:flex-row">
				{/* img  */}
				<div className="">
					<Image
						src={"/home/image.png"}
						alt="pic"
						height={200}
						width={200}
						className="h-[700] w-[1050]"
					/>
				</div>
				{/* about  */}
				<div className="flex flex-col items-start justify-center gap-4">
					<Badge className="rounded-4xl bg-white p-2 text-2xl font-light text-orange-400">
						ABOUT US
					</Badge>
					<div className="text-5xl font-bold">
						Your Journey, Our Passion
					</div>
					<div className="font-normal">
						We believe that travel is more than just visiting new
						places; its about creating memories, experiencing
						diverse cultures, and discovering the wonders of the
						world. With years of experience in the travel industry,
						our dedicated team is committed to providing exceptional
						travel experiences tailored to your unique desires and
						needs.
					</div>

					{/* image button sec  */}
					<div className="flex flex-col items-center justify-center gap-5 md:flex-row">
						<div className="">
							<Image
								src={"/home/video.jpg"}
								alt="pic"
								height={200}
								width={200}
								className="rounded-2xl"
							/>
						</div>
						<div className="flex flex-col items-start gap-3">
							<div className="flex items-center gap-2">
								<CircleCheck size={24} />
								<div className="">Budget Friendly</div>
							</div>
							<div className="flex items-center gap-2">
								<CircleCheck size={24} />
								<div className="">Luxurious Getaways </div>
							</div>
							<div className="flex items-center gap-2">
								<CircleCheck size={24} />
								<div className="">Trusted Local Guides</div>
							</div>
							<div className="">
								<Button className="bg-orange-400 p-6">
									learn more <CircleArrowRight size={24} />
								</Button>
							</div>
						</div>
					</div>

					{/* avatar  */}

					<div className="flex flex-row flex-wrap items-center">
						<Avatar>
							<AvatarImage
								src="/home/girl2.jpg"
								alt="@shadcn"
								height={200}
								width={200}
							/>
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className="">
							<AvatarImage
								src="/home/girl.jpg"
								alt="@evilrabbit"
								height={200}
								width={200}
							/>
							<AvatarFallback>ER</AvatarFallback>
						</Avatar>

						<div className="">
							<div className="">4.7 Star Rating</div>
							<div className="">Based on 3,571 Reviews</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

import { SquareArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./shadcnui/button";

const Footer = () => {
	return (
		<>
			{/* footer top  */}
			<div className="bg-orange-600">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-white">
					<div className="space-y-6">
						<div className="text-5xl font-bold">
							<div className="">Ready to start your</div>
							<div className="">Adventure ?</div>
						</div>
						<div className="">
							<div className="">
								Let uscreate the perfect journey. Our travel
								Experts are
							</div>
							<div className="">
								Readt to craft your dream vacation.
							</div>
						</div>
						<Button className="bg-white p-6 text-orange-400 hover:bg-white">
							Start planning
							<SquareArrowRight size={24} />
						</Button>
						<div className=""></div>
					</div>
					<div className="">
						<Image
							src={"/image-12.png"}
							alt="pic"
							height={200}
							width={200}
							className="h-[450] w-[400]"
						/>
					</div>
				</div>
			</div>
			{/* footer top  */}
		</>
	);
};

export default Footer;

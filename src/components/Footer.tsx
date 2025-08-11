import { MailMinus, Phone, SquareArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./shadcnui/button";

const Footer = () => {
	return (
		<section className="">
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
			{/* footer  */}
			<div className="bg-black text-white">
				<div className="mx-auto flex max-w-7xl flex-col items-start justify-center px-6 py-10 md:flex-row md:items-center md:justify-between">
					{/* logo */}
					<div className="space-y-6">
						<div className="">
							<Link href={"/"}>
								<Image
									src={"/logo.svg"}
									alt="logo"
									height={200}
									width={200}
									className=""
								/>
							</Link>
						</div>
						<div className="">
							<div className="">
								Your trusted partner for extraordinary travel
							</div>
							<div className="">experiences since 2015.</div>
						</div>
					</div>
					{/* link  */}
					<div className="space-y-4">
						<div className="text-2xl">Quick Links</div>
						<div className="">Home</div>
						<div className="">About </div>
						<div className="">Package</div>
						<div className="">Contact</div>
					</div>
					{/* contact  */}
					<div className="space-y-4">
						<div className="text-2xl">Contact</div>
						<div className="">
							<div className="">
								455 West Orchard Street Kings
							</div>
							<div className="">Mountain, NC 280867</div>
						</div>
						<div className="flex items-center gap-2">
							<Phone size={24} />

							<div className="">+088 (246) 642-27-10</div>
						</div>
						<div className="flex items-center gap-2">
							<MailMinus size={24} />
							<div className="">example@gmail.com</div>
						</div>
					</div>
					{/* follow  */}
					<div className="space-y-4">
						<div className="text-2xl">Follow Us</div>
						<div className="">Instagram</div>
						<div className="">Twitter</div>
						<div className="">Linkedin</div>
						<div className="">Facebook</div>
					</div>
				</div>
				{/* footer  */}

				<div className="border-t-2 border-white/10 py-4 text-center">
					Copyright © 2025 Travel Agency
				</div>
			</div>
		</section>
	);
};

export default Footer;

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
							className="hidden h-[450] w-[400] md:flex"
						/>
					</div>
				</div>
			</div>
			{/* footer top  */}
			{/* footer  */}
			<div className="bg-black text-white">
				<div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 md:flex-row md:items-start md:justify-between">
					{/* Logo & tagline */}
					<div className="max-w-xs space-y-6">
						<Link href={"/"}>
							<Image
								src={"/logo.svg"}
								alt="logo"
								height={200}
								width={200}
							/>
						</Link>
						<div>
							<div>
								Your trusted partner for extraordinary travel
							</div>
							<div>experiences since 2015.</div>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<div className="text-2xl font-semibold">
							Quick Links
						</div>
						<div>Home</div>
						<div>About</div>
						<div>Package</div>
						<div>Contact</div>
					</div>

					{/* Contact */}
					<div className="space-y-4">
						<div className="text-2xl font-semibold">Contact</div>
						<div>
							<div>455 West Orchard Street Kings</div>
							<div>Mountain, NC 280867</div>
						</div>
						<div className="flex items-center gap-2">
							<Phone size={24} />
							<span>+088 (246) 642-27-10</span>
						</div>
						<div className="flex items-center gap-2">
							<MailMinus size={24} />
							<span>example@gmail.com</span>
						</div>
					</div>

					{/* Follow Us */}
					<div className="space-y-4">
						<div className="text-2xl font-semibold">Follow Us</div>
						<div>Instagram</div>
						<div>Twitter</div>
						<div>Linkedin</div>
						<div>Facebook</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-white/10 py-4 text-center text-sm text-white/70">
					Copyright © 2025 Travel Agency
				</div>
			</div>
		</section>
	);
};

export default Footer;

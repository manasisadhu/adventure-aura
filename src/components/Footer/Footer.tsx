import { MailMinus, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<section>
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
								className="h-[30] w-[180]"
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
						<div>
							<Link
								href={"/"}
								className="hover:text-amber-500">
								Home
							</Link>
						</div>

						<div>
							<Link
								href={"/about"}
								className="hover:text-amber-500">
								About
							</Link>
						</div>

						<div>
							<Link
								href={"/package"}
								className="hover:text-amber-500">
								Package
							</Link>
						</div>

						<div>
							<Link
								href={"contact"}
								className="hover:text-amber-500">
								Contact
							</Link>
						</div>
					</div>

					{/* Contact */}
					<div className="space-y-4">
						<div className="text-2xl font-semibold">Contact</div>
						<div className="cursor-pointer hover:text-amber-500">
							<div>455 West Orchard Street Kings</div>
							<div>Mountain, NC 280867</div>
						</div>
						<div className="flex cursor-pointer items-center gap-2 hover:text-amber-500">
							<Phone size={24} />
							<span>+088 (246) 642-27-10</span>
						</div>
						<div className="flex cursor-pointer items-center gap-2 hover:text-amber-500">
							<MailMinus size={24} />
							<span>example@gmail.com</span>
						</div>
					</div>

					{/* Follow Us */}
					<div className="space-y-4">
						<div className="text-2xl font-semibold">Follow Us</div>
						<div className="cursor-pointer hover:text-amber-500">
							Instagram
						</div>
						<div className="cursor-pointer hover:text-amber-500">
							Twitter
						</div>
						<div className="cursor-pointer hover:text-amber-500">
							Linkedin
						</div>
						<div className="cursor-pointer hover:text-amber-500">
							Facebook
						</div>
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

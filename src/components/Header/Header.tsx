import Image from "next/image";
import Link from "next/link";
import ThemeToggleButton from "../customui/ThemeToggleButton";
import { Badge } from "../shadcnui/badge";
import Desktopnav from "./Desktopnav";
import Mobilenav from "./Mobilenav";

const Header = () => {
	return (
		<section className="fixed right-0 left-0 bg-black/10 backdrop-blur-md dark:bg-white/5">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
				<div className="flex items-center gap-2">
					<Link href={"/"}>
						<Image
							src={"/logo.svg"}
							alt="logo"
							height={200}
							width={200}
							className=""
						/>
					</Link>
					<ThemeToggleButton />
				</div>
				{/* desktopnav  */}
				<div className="text-md hidden items-center gap-6 font-semibold lg:flex">
					<Desktopnav />
				</div>

				{/* mobilenav  */}
				<div className="block lg:hidden">
					<Mobilenav />
				</div>

				<Badge className="hidden bg-orange-400 p-4 lg:flex">
					Plan Your Trip
				</Badge>
			</div>
		</section>
	);
};

export default Header;

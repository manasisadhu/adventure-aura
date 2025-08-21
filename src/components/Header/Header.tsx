import Image from "next/image";
import Link from "next/link";
import CommonBtn from "../customui/CommonBtn";
import ThemeToggleButton from "../customui/ThemeToggleButton";
import Desktopnav from "./Desktopnav";
import Mobilenav from "./Mobilenav";

const Header = () => {
	return (
		<header className="fixed right-0 left-0 z-[10] bg-black/10 text-white backdrop-blur-md dark:bg-white/5">
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
				<div className="flex items-center gap-2">
					<Link href={"/"}>
						<Image
							src={"/logo.svg"}
							alt="logo"
							height={200}
							width={200}
							className="h-[30] w-[180]"
						/>
					</Link>
					<ThemeToggleButton />
				</div>
				{/* desktopnav  */}
				<div className="text-md hidden items-center gap-6 font-semibold md:block">
					<Desktopnav />
				</div>

				{/* mobilenav  */}
				<div className="block md:hidden">
					<Mobilenav />
				</div>
				<div className="hidden md:flex">
					<CommonBtn
						className=""
						href="/package">
						Plan Your Trip
					</CommonBtn>
				</div>
			</nav>
		</header>
	);
};

export default Header;

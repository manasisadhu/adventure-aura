import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../shadcnui/sheet";

const Mobilenav = () => {
	return (
		<Sheet>
			<SheetTrigger className="bg-white/10 p-2">
				{/* triger icon  */}
				<Menu
					className="text-white"
					size={24}
				/>
			</SheetTrigger>
			<SheetDescription></SheetDescription>
			<SheetContent className="border-none bg-white/10 backdrop-blur-md">
				<SheetHeader>
					<SheetTitle className="flex justify-center border-b-2 pb-4">
						<Link href={"/"}>
							<Image
								src={"/logo.svg"}
								alt="logo"
								height={200}
								width={200}
								className="h-[30] w-[180]"
							/>
						</Link>
					</SheetTitle>
				</SheetHeader>
				<div className="grid place-items-center gap-4 font-semibold text-white">
					<Link
						href={"/"}
						className="hover:text-orange-500">
						Home
					</Link>
					<Link
						href={"/about"}
						className="hover:text-orange-500">
						About
					</Link>
					<Link
						href={"/package"}
						className="hover:text-orange-500">
						Packages
					</Link>

					<Link
						href={"/contact"}
						className="hover:text-orange-500">
						Contact
					</Link>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default Mobilenav;

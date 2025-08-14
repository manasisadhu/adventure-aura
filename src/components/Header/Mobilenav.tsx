import { Menu } from "lucide-react";
import Link from "next/link";
import {
	Sheet,
	SheetContent,
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
			<SheetContent>
				<SheetHeader>
					<SheetTitle className="flex justify-center pb-4">
						<Link href={"/"}></Link>
					</SheetTitle>
				</SheetHeader>
				<div className="grid place-items-center gap-4 font-semibold">
					<Link
						href={"/"}
						className="hover:text-red-400">
						Home
					</Link>
					<Link
						href={"/about"}
						className="hover:text-red-400">
						About
					</Link>
					<Link
						href={"/package"}
						className="hover:text-red-400">
						Packages
					</Link>

					<Link
						href={"/contact"}
						className="hover:text-red-400">
						Contact
					</Link>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default Mobilenav;

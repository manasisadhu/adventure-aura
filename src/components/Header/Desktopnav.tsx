import Link from "next/link";

const Desktopnav = () => {
	return (
		<>
			<div className="flex items-center gap-3">
				<Link
					href={"/"}
					className="hover:text-amber-500">
					Home
				</Link>
				<Link
					href={"/about"}
					className="hover:text-amber-500">
					About
				</Link>
				<Link
					href={"/package"}
					className="hover:text-amber-500">
					Packages
				</Link>
				<Link
					href={"/"}
					className="hover:text-amber-500">
					Contact
				</Link>
			</div>
		</>
	);
};

export default Desktopnav;

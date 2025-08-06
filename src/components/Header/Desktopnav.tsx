import Link from "next/link";

const Desktopnav = () => {
	return (
		<>
			<div className="flex items-center gap-3">
				<Link
					href={"/"}
					className="hover:text-orange-600">
					Home
				</Link>
				<Link
					href={"/"}
					className="hover:text-orange-600">
					About
				</Link>
				<Link
					href={"/"}
					className="hover:text-orange-600">
					Packages
				</Link>
				<Link
					href={"/"}
					className="hover:text-orange-600">
					Contact
				</Link>
			</div>
		</>
	);
};

export default Desktopnav;

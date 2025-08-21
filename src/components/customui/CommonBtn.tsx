import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../shadcnui/button";

type BtnProps = {
	children: ReactNode;
	className: string;
	href: string;
};

const CommonBtn = ({ children, className, href, ...props }: BtnProps) => {
	return (
		<>
			<Link href={href}>
				<Button
					className={cn(
						"flex cursor-pointer items-center justify-center gap-2 bg-amber-500 px-4 text-white hover:bg-orange-400",
						className,
					)}
					{...props}>
					{children}
				</Button>
			</Link>
		</>
	);
};

export default CommonBtn;

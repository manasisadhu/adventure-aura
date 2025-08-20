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
						"flex items-center justify-center gap-2 px-6 py-4 text-[14px] leading-none font-bold text-white",
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

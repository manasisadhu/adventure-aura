import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Badge } from "../shadcnui/badge";
type ComponentsType = {
	className: string;
	children: ReactNode;
};

const Badges = ({ className, children, ...props }: ComponentsType) => {
	return (
		<>
			<Badge
				className={cn(
					"rounded-3xl bg-orange-400/20 px-6 py-2 text-orange-600",
					className,
				)}
				{...props}>
				{children}
			</Badge>
		</>
	);
};

export default Badges;

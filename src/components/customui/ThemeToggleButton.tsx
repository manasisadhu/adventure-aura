"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../shadcnui/button";

const ThemeToggleButton = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="hover:cursor-pointer"
			variant={"link"}>
			<Sun
				size={28}
				className="-rotate-90 opacity-100 transition-all duration-300 dark:rotate-0 dark:opacity-0"
			/>

			<MoonStar
				size={28}
				className="absolute -rotate-90 opacity-0 transition-all duration-300 dark:rotate-0 dark:opacity-100"
			/>
		</Button>
	);
};

export default ThemeToggleButton;

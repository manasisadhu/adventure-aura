import { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

export type detailsproptype = {
	id: number;
	img: string;
	title: string;
	head: string;
	clock: string;
	travel: string;
	travel1: string;
	travel2: string;
	travel3: string;
	price: string;
	btn: string;
	bottom: string;
};

export type Web3FormsResponse = {
	success: boolean;
	message: string;
};

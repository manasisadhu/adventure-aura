import Footer from "@/components/Footer/Footer";
import FooterTop from "@/components/Footer/FooterTop";
import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/ThemeProvider";
import { RootLayoutProps } from "@/lib/types";
import { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

// Seo and Information
export const metadata: Metadata = {
	title: "Adventure Aura",
	description:
		"Adventure Aura is your gateway to unforgettable journeys, where exploration meets inspiration. From breathtaking destinations and hidden gems to travel tips and unique experiences, we bring you everything you need to fuel your wanderlust. Whether you’re seeking adrenaline-filled adventures, serene escapes, or cultural discoveries, Adventure Aura is here to guide and inspire every step of your journey.",
	icons: {
		icon: [
			{
				url: "/travel-bag.png",
				type: "image/svg+xml",
				sizes: "275x275",
			},
		],
	},
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className="scroll-smooth">
			<body className="">
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					<Toaster swipeDirections={["right"]} />
					<Header />
					<main>{children}</main>
					<FooterTop />
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;

import Footer from "@/components/Footer/Footer";
import FooterTop from "@/components/Footer/FooterTop";
import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/ThemeProvider";
import { RootLayoutProps } from "@/lib/types";
import "./globals.css";

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

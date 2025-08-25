import Hero from "@/components/Hero/Hero";
import Destination from "@/components/Home/Destination";
import Package from "@/components/Home/Package";
import Review from "@/components/Home/Review";
import Us from "@/components/Home/Us";
import VideoSec from "@/components/Home/VideoSec";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Adventure Aura",
	description:
		"Adventure Aura is your go-to travel guide, inspiring adventures with tips, destinations, and stories to make every journey unforgettable.",
};

const page = () => {
	return (
		<>
			<section>
				{/* hero  */}
				<Hero />
				{/* package  */}
				<Package />

				{/* about us  */}

				<section
					className="mx-auto px-6 pt-14 text-center md:pt-18"
					id="video">
					<h1 className="mb-10 text-4xl font-bold">
						Let&apos;s Watch Our Latest Videos
					</h1>
					<VideoSec />
				</section>
				{/* destinations  */}
				<Destination />
				{/* why us  */}
				<Us />
				{/* review  */}
				<section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
					<Review />
				</section>
			</section>
		</>
	);
};

export default page;

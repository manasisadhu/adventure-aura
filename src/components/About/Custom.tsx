import Image from "next/image";

import Badges from "../customui/Badges";

const Custom = () => {
	return (
		<>
			<div className="mx-auto grid max-w-7xl grid-cols-1 place-items-center gap-8 px-6 py-14 md:gap-14 md:py-18 lg:grid-cols-2">
				<div className="space-y-6">
					<Badges className="text-xl font-medium dark:bg-orange-400/25 dark:text-orange-400">
						Customized Itineraries
					</Badges>
					<div className="text-3xl font-bold md:text-5xl">
						We Believe That Travel is a Personal Journey
					</div>
					<div className="text-black/75 dark:text-white/75">
						Our team of seasoned travel experts brings years of
						experience and an in-depth understanding of the world’s
						most captivating destinations. We believe that travel is
						a personal journey, and we strive to provide
						personalized service that reflects your unique tastes
						and interests.
					</div>
				</div>
				{/* img  */}

				<Image
					src={"/about/trek.jpg"}
					alt="pic"
					height={800}
					width={800}
					className="h-auto w-full rounded-3xl"
				/>
			</div>
		</>
	);
};

export default Custom;

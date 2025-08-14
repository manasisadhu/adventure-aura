import Image from "next/image";
import { Badge } from "../shadcnui/badge";

const Custom = () => {
	return (
		<>
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 py-10 md:flex-row md:justify-between">
				<div className="space-y-6">
					<Badge className="rounded-4xl bg-orange-400/20 px-4 py-2 text-2xl font-medium text-orange-600 dark:bg-white/20 dark:text-white">
						Customized Itineraries
					</Badge>
					<div className="text-5xl font-bold">
						We Believe That Travel is a Personal Journey
					</div>
					<div className="">
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
					src={"/About/trek.jpg"}
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

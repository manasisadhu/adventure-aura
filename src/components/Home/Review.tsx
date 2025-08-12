import { Quote } from "lucide-react";
import Image from "next/image";
import { Badge } from "../shadcnui/badge";

const Review = () => {
	return (
		<>
			<div className="mt-2 flex flex-col items-center justify-center space-y-6">
				<Badge className="rounded-3xl bg-orange-400/30 px-6 py-2 text-xl font-medium text-orange-600 dark:bg-white/20 dark:text-white">
					TESTIMONIALS
				</Badge>
				<div className="text-4xl font-semibold">TOP REVIEWS</div>
				<Quote
					size={54}
					className="rotate-180 text-orange-500"
				/>
				<div className="w-auto text-center lg:w-xl">
					“An absolutely incredible experience! The attention to
					detail and personalized service made our Maldives trip
					unforgettable. Highly recommend!”
				</div>
				<Image
					src={"/home/home-review.png"}
					alt="pic"
					height={100}
					width={100}
				/>
				<div className="text-xl font-bold">JAMES ANDERSON</div>
			</div>
		</>
	);
};

export default Review;

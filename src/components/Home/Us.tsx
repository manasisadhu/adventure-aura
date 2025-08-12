import { Quote } from "lucide-react";

const Us = () => {
	return (
		<>
			<div className="mt-5 h-[500] bg-[url('/home/home-tour.jpg')] bg-cover bg-center bg-no-repeat">
				<div className="flex h-dvh flex-col items-center justify-center">
					<div className="flex text-5xl font-bold text-white">
						<Quote
							size={24}
							className="scale-x-[-1]"
						/>
						Crafting Unforgetable Journeys
						<Quote size={24} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Us;

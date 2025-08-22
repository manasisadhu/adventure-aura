import Badges from "../customui/Badges";
const Abouthero = () => {
	return (
		<>
			<div className="bg-[url('/about/about-hero.jpg')] bg-cover bg-center bg-no-repeat">
				<div className="flex h-[80dvh] flex-col items-center justify-center bg-black/40 text-center md:h-[94dvh] lg:h-dvh">
					<div className="mx-auto max-w-7xl space-y-6 px-6 py-10">
						<Badges className="rounded-4xl bg-white/30 text-lg text-white">
							ABOUT US
						</Badges>
						<div className="w-auto text-4xl font-bold text-white md:text-7xl lg:w-4xl">
							Established with a passion for exploration
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Abouthero;

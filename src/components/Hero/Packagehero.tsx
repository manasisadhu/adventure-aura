import Badges from "../customui/Badges";
const Packagehero = () => {
	return (
		<>
			<div className="bg-[url('/packages/packages-hero.jpg')] bg-cover bg-center bg-no-repeat">
				<div className="flex h-[80dvh] flex-col items-center justify-center bg-black/40 text-center md:h-[94dvh] lg:h-dvh">
					<div className="mx-auto max-w-7xl space-y-6 px-6 py-10">
						<Badges className="rounded-4xl bg-white/30 text-lg text-white">
							Our Packages
						</Badges>
						<div className="w-auto text-4xl font-bold text-white md:text-7xl lg:w-4xl">
							Discover Your Perfect Adventure
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Packagehero;

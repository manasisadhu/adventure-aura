import { details } from "@/lib/mapdata";

import PackageCard from "./PackageCard";

const Pack = () => {
	return (
		<>
			<section className="space-y-8">
				{details.map((detail) => {
					return (
						<PackageCard
							key={detail.id}
							data={detail}
						/>
					);
				})}
			</section>
		</>
	);
};

export default Pack;

import Card from "./Card";

type detailsproptype = {
	id: number;
	img: string;
	title: string;
	head: string;
	clock: string;
	travel: string;
	travel1: string;
	travel2: string;
	travel3: string;
	price: string;
	btn: string;
	bottom: string;
};

const Pack = () => {
	const details: detailsproptype[] = [
		{
			id: 1,
			img: "/Packages/packages1.jpg",
			title: "Africa",
			head: "Enchanting Mauritius",
			clock: "5 Days/ 6 Nights",
			travel: "Hotel",
			travel1: "Car",
			travel2: "Cruises",
			travel3: "Flights",
			price: "₹1,05,450 /Person",
			btn: "Start trip",
			bottom: "This price is lower than the average price in April",
		},
		{
			id: 2,
			img: "/Packages/maldives.jpg",
			title: "Asia",
			head: "Majestic Maldives",
			clock: "5 Days/ 6 Nights",
			travel: "Hotel",
			travel1: "Car",
			travel2: "Cruises",
			travel3: "Flights",
			price: "₹1,05,450 /Person",
			btn: "Start trip",
			bottom: "This price is lower than the average price in April",
		},
		{
			id: 3,
			img: "/Packages/vietnam.jpg",
			title: "Asia",
			head: "Vibrant Vietnam",
			clock: "5 Days/ 6 Nights",
			travel: "Hotel",
			travel1: "Car",
			travel2: "Cruises",
			travel3: "Flights",
			price: "₹1,05,450 /Person",
			btn: "Start trip",
			bottom: "This price is lower than the average price in April",
		},
		{
			id: 4,
			img: "/Packages/morocco.jpg",
			title: "Mystical Morocco",
			head: "Enchanting Mauritius",
			clock: "5 Days/ 6 Nights",
			travel: "Hotel",
			travel1: "Car",
			travel2: "Cruises",
			travel3: "Flights",
			price: "₹1,05,450 /Person",
			btn: "Start trip",
			bottom: "This price is lower than the average price in April",
		},
	];
	return (
		<>
			<section className="space-y-6">
				{details.map((detail) => {
					return (
						<Card
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

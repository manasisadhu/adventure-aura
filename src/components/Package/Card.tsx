import { Car, Clock, Hotel, Plane, Ship, SquareArrowRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "../shadcnui/badge";
import { Button } from "../shadcnui/button";

type cardproptype = {
	data: {
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
};

const Card = ({ data }: cardproptype) => {
	return (
		<>
			<div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-4 px-6 md:flex-row md:justify-between">
				<div className="">
					<Image
						src={data.img}
						alt="pic "
						height={200}
						width={200}
						className="h-auto w-full rounded-2xl"
					/>
				</div>
				<div className="flex flex-col items-start justify-center gap-4">
					<Badge className="rounded-4xl bg-orange-400/30 px-8 py-1 text-lg text-orange-900">
						{data.title}
					</Badge>
					<div className="text-4xl font-bold">{data.head}</div>
					<div className="flex items-center justify-center gap-2">
						<Clock size={24} />
						<div className="">{data.clock}</div>
					</div>
					<div className="flex items-center justify-center gap-2">
						<Hotel size={24} />
						<div className="">{data.travel}</div>
						<Car size={24} />
						<div className="">{data.travel1}</div>
						<Ship size={24} />
						<div className="">{data.travel2}</div>
						<Plane size={24} />
						<div className="">{data.travel3}</div>
					</div>
					<div className="flex items-center justify-between gap-24">
						<div className="">{data.price}</div>
						<Button className="bg-orange-400 p-6 text-white hover:bg-amber-500">
							{data.btn}
							<SquareArrowRight size={24} />
						</Button>
					</div>
					<div className="">{data.bottom}</div>
				</div>
			</div>
		</>
	);
};

export default Card;

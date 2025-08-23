import { detailsproptype } from "@/lib/types";
import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/shadcnui/card";
import { Clock, Star } from "lucide-react";
import { FaCar, FaHotel } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { PiSailboatFill } from "react-icons/pi";
import Badges from "../customui/Badges";
import CommonBtn from "../customui/CommonBtn";

type cardproptype = {
	data: detailsproptype;
};

const PackageCard = ({ data }: cardproptype) => {
	return (
		<section className="mx-auto max-w-7xl px-6">
			<Card className="grid grid-cols-1 lg:grid-cols-2">
				<CardHeader>
					<Image
						src={data.img}
						alt="pic "
						height={720}
						width={1080}
						className="aspect-[3/2] w-full rounded-2xl lg:aspect-auto lg:h-auto"
					/>
				</CardHeader>
				<CardContent className="flex flex-col justify-center gap-4 lg:gap-8">
					<Badges className="px-14 py-1 text-xl font-medium dark:bg-orange-400/25 dark:text-orange-400">
						{data.title}
					</Badges>

					<h1 className="text-4xl font-medium">{data.head}</h1>

					<div className="flex justify-between">
						<div className="flex items-start gap-2 text-xl md:items-center">
							<Clock className="text-amber-500" />
							{data.clock}
						</div>

						<div className="flex gap-1">
							<Star className="fill-amber-500 text-amber-500" />
							<Star className="fill-amber-500 text-amber-500" />
							<Star className="fill-amber-500 text-amber-500" />
							<Star className="fill-amber-500 text-amber-500" />
							<Star className="fill-amber-500 text-amber-500" />
						</div>
					</div>

					<div className="flex flex-wrap gap-3 text-xl md:gap-8">
						<div className="flex items-center gap-3">
							<FaHotel className="fill-amber-500 text-3xl" />
							{data.travel}
						</div>
						<div className="flex items-center gap-3">
							<FaCar className="fill-amber-500 text-3xl" />
							{data.travel1}
						</div>
						<div className="flex items-center gap-3">
							<PiSailboatFill className="fill-amber-500 text-3xl" />
							{data.travel2}
						</div>
						<div className="flex items-center gap-3">
							<MdFlightTakeoff className="fill-amber-500 text-3xl" />
							{data.travel3}
						</div>
					</div>

					<div className="flex flex-wrap items-center justify-between gap-6">
						<div className="">
							<div className="text-2xl font-medium lg:text-3xl">
								{data.price}
							</div>
							<div className="text-md text-black/80 lg:text-lg dark:text-white/60">
								{data.bottom}
							</div>
						</div>
						<CommonBtn
							className=""
							href="#">
							{data.btn}
						</CommonBtn>
					</div>
				</CardContent>
			</Card>
		</section>
	);
};

export default PackageCard;

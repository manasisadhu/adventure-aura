"use client";

import { Earth, Headset, UserPen, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { HyperText } from "../magicui/hyper-text";
import { Badge } from "../shadcnui/badge";

const Abouthero = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 1,
	});

	return (
		<>
			<div className="bg-[url('/about/about-hero.jpg')] bg-cover bg-center bg-no-repeat">
				<div className="flex h-dvh flex-col items-center justify-center bg-black/40 text-center">
					<div className="mx-auto max-w-7xl space-y-6 px-6 py-10">
						<Badge className="rounded-4xl bg-white/30 px-8 py-1 text-lg text-white">
							ABOUT US
						</Badge>
						<div className="w-auto text-4xl font-bold text-white md:text-7xl lg:w-4xl">
							Established with a passion for exploration
						</div>
					</div>
				</div>
			</div>
			<div
				className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-6 px-6 py-10 text-center lg:grid-cols-4"
				ref={ref}>
				<div>
					<Users
						size={34}
						className="mx-auto"
					/>
					{inView && (
						<HyperText
							className="text-4xl font-semibold"
							animateOnHover={false}>
							10+
						</HyperText>
					)}
					<div>Years of Experience</div>
				</div>
				<div>
					<Earth
						size={34}
						className="mx-auto"
					/>

					{inView && (
						<HyperText
							className="text-4xl font-semibold"
							animateOnHover={false}>
							500+
						</HyperText>
					)}

					<div>Destinations</div>
				</div>
				<div>
					<Headset
						size={34}
						className="mx-auto"
					/>
					{inView && (
						<HyperText
							className="text-4xl font-semibold"
							animateOnHover={false}>
							24/7+
						</HyperText>
					)}

					<div>Customer Support</div>
				</div>
				<div>
					<UserPen
						size={34}
						className="mx-auto"
					/>
					{inView && (
						<HyperText
							className="text-4xl font-semibold"
							animateOnHover={false}>
							98%
						</HyperText>
					)}

					<div>Happy Clients</div>
				</div>
			</div>
		</>
	);
};

export default Abouthero;

"use client";
import { Earth, Headset, UserPen, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { HyperText } from "../magicui/hyper-text";
const OurAchivements = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 1,
	});
	return (
		<>
			<div
				className="mx-auto mt-4 grid max-w-7xl grid-cols-2 gap-x-8 gap-y-6 px-6 text-center lg:grid-cols-4"
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

export default OurAchivements;

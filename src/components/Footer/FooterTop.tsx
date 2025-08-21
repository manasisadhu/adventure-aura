import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import CommonBtn from "../customui/CommonBtn";

const FooterTop = () => {
	return (
		<>
			<div className="bg-orange-600 py-12 md:py-0">
				<div className="mx-auto max-w-7xl px-6 text-white md:flex md:items-center md:justify-between">
					<div className="space-y-6 md:w-xl">
						<div className="text-4xl font-bold md:text-5xl">
							Ready to start your Adventure ?
						</div>

						<div className="md:w-lg">
							Let uscreate the perfect journey. Our travel Experts
							are Readt to craft your dream vacation.
						</div>

						<CommonBtn
							className="bg-white text-orange-400 hover:bg-white"
							href="/contact">
							Start planning
							<ChevronsRight className="mt-1" />
						</CommonBtn>
					</div>
					<div className="">
						<Image
							src={"/image-12.png"}
							alt="pic"
							height={800}
							width={800}
							className="hidden h-[400] w-full md:flex"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default FooterTop;

import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactUi = () => {
	return (
		<section className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2">
			<Image
				src={"/contact/explore.jpg"}
				alt="contact-img"
				height={600}
				width={600}
				className="mb-4 h-auto w-full rounded-3xl object-cover md:order-2 md:h-[500] md:w-auto"
			/>
			<ContactForm />
		</section>
	);
};

export default ContactUi;

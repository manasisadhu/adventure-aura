import HeroVideoDialog from "../magicui/hero-video-dialog";

const VideoSec = () => {
	return (
		<>
			<div className="relative">
				<HeroVideoDialog
					className="block dark:hidden"
					animationStyle="top-in-bottom-out"
					videoSrc="https://www.youtube.com/embed/JXMWOmuR1hU?si=mVewnGgOh2fjYKoM"
					thumbnailSrc="https://cdn.create.vista.com/downloads/2ccf0be9-6c39-4deb-a417-dc0fab9aa6e4_1024.jpeg"
					thumbnailAlt="Hero Video"
				/>
				<HeroVideoDialog
					className="hidden dark:block"
					animationStyle="top-in-bottom-out"
					videoSrc="https://www.youtube.com/embed/JXMWOmuR1hU?si=mVewnGgOh2fjYKoM"
					thumbnailSrc="https://cdn.create.vista.com/downloads/2ccf0be9-6c39-4deb-a417-dc0fab9aa6e4_1024.jpeg"
					thumbnailAlt="Hero Video"
				/>
			</div>
		</>
	);
};

export default VideoSec;

import About from "@container/About";

// --- SEO
import SEO from "@util/SEO";
export const metadata = SEO({
	title: "Tentang Kami",
	description: "Tentang Kami",
	keywords: "tentang kami",
});

const AboutPage = () => {
	return <About />;
};

export default AboutPage;

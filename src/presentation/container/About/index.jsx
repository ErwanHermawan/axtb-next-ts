// --- components
import Default from "@template/Default";
import SectionFlag from "@organism/SectionFlag";

// --- datas
import BannerData from "./BannerData";

const About = () => {
	return (
		<>
			<Default page="about">
				<SectionFlag page="about" data={BannerData} />
			</Default>
		</>
	);
};

export default About;

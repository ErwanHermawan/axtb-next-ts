// --- components
import Default from "@template/Default";
import HeroBanner from "@organism/HeroBanner";

// --- datas
import BannerData from "./BannerData";

const Services = () => {
	return (
		<>
			<Default page="services">
				<HeroBanner page="services" data={BannerData} />
			</Default>
		</>
	);
};

export default Services;

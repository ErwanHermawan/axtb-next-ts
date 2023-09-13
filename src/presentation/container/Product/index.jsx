// --- components
import Default from "@template/Default";
import HeroBanner from "@organism/HeroBanner";

// --- data
import BannerData from "./BannerData";

const Product = () => {
	return (
		<>
			<Default page="product">
				<HeroBanner page="product" data={BannerData} />
			</Default>
		</>
	);
};

export default Product;

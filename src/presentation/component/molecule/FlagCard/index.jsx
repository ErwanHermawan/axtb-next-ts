// --- core
import Image from "next/image";

import style from "./style.module.scss";

const FlagCard = (props) => {
	const { country, population, region, capital, image } = props;

	return (
		<div className={style.card}>
			<div className={style.image}>
				<Image src={image} alt={country} className={style.imageEl} />
			</div>
			<div className={style.detail}>
				<h4>{country}</h4>
				<p>{population}</p>
				<p>{region}</p>
				<p>{capital}</p>
			</div>
		</div>
	);
};

export default FlagCard;

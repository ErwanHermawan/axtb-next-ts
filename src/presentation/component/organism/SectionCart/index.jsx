// --- components
import Button from "@atom/Button";

// --- style
import style from "./style.module.scss";

// --- state
import useCart from "@state/cart";

const SectionCart = () => {
	const { totalCart, handleIncrement, handleDecrement } = useCart();
	return (
		<div className={style.section}>
			<h2>{totalCart}</h2>
			<Button variant="primary" onClick={handleDecrement}>
				-
			</Button>
			<Button variant="primary" onClick={handleIncrement}>
				+
			</Button>
		</div>
	);
};

export default SectionCart;

// --- core
import Link from "next/link";

// --- style
import style from "./style.module.scss";

// --- interface type
import { IButton } from "./IButton";

const Button = (props: IButton) => {
	const { variant, ghost, children, link } = props;

	let variantStyle = style.button;
	if (variant === "primary") {
		variantStyle += " " + style.buttonPrimary;
	} else if (variant === "secondary") {
		variantStyle += " " + style.buttonSecondary;
	} else if (variant === "tertiary") {
		variantStyle += " " + style.buttonTertiary;
	}

	if (ghost) {
		variantStyle += " " + style.buttonGhost;
	}

	if (link) {
		return (
			<Link {...props} className={variantStyle}>
				{children}
			</Link>
		);
	}

	return (
		<button {...props} className={variantStyle}>
			{children}
		</button>
	);
};

export default Button;

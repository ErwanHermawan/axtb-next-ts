// --- component
import Header from "@organism/Header";
import Footer from "@organism/Footer";

// --- styles
import style from "./style.module.scss";

// --- interface type
import { IDefault } from "./IDefault";

function Default(props: IDefault) {
	const { children } = props;

	return (
		<>
			<Header />
			<div className={style.main}>{children}</div>
			<Footer />
		</>
	);
}

export default Default;

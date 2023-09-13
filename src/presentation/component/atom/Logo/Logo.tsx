// --- core
import Image from "next/image";

// --- interface type
import { ILogo } from "./ILogo";

const Logo = (props: ILogo) => {
	const { filename, name } = props;

	return <Image {...props} src={`asset/image/logo/${filename}`} alt={name} />;
};

export default Logo;

// --- components
import SectionPersonalInfo from "@organism/SectionPersonalInfo";

// --- models
import { useUser } from "@model/users";

const WidgetPersonalInformation = async () => {
	// const { data: dataUser, error: errorUser } = useUser();
	let dataUser = null;
	let errorUser = null;

	try {
		const response = await useUser();
		dataUser = response;
	} catch (err) {
		errorUser = err.message;
	}

	return (
		<SectionPersonalInfo
			title="Personal Information"
			data={dataUser}
			error={errorUser?.message}
		/>
	);
};

export default WidgetPersonalInformation;

import axios from "axios";

const httpServer = async (param) => {
	let config = { ...param };
	if (param.token) {
		config = {
			headers: {
				Authorization: "Bearer " + localStorage.getItem("token"),
			},
			...param,
		};
	}

	const response = await axios(config);
	if (response.status !== 200) {
		throw new Error("Failed to fetch data");
	}

	return response.data;
};

export default httpServer;

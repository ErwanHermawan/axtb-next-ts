"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const RequestComponent = (param) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		let config = { ...param };
		if (param.token) {
			config = {
				...param,
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			};
		}

		axios(config)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				if (error.response !== undefined) {
					setError({
						status: error.response.status,
						type: error.name,
						message: error.message,
					});
				} else {
					setError({
						status: 410,
						type: "Gone",
						message:
							"The requested resource is no longer available at the server.",
					});
				}
			});
	}, []);

	return { data, error };
};

const httpClient = (param) => {
	return RequestComponent(param);
};

export default httpClient;

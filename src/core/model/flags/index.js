// --- endpoints
import ENDPOINT from "infrastucture/api/endPoint";

// --- models
import httpClient from "infrastucture/api/httpClient";

export const useFlag = () => {
	return httpClient({
		method: "get",
		url: ENDPOINT.FLAGS,
	});
};

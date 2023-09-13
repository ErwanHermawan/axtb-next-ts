// --- endpoints
import ENDPOINT from "infrastucture/api/endPoint";

// --- models
import httpServer from "infrastucture/api/httpServer";

export const useUser = () => {
	return httpServer({
		method: "get",
		url: ENDPOINT.USERS,
	});
};

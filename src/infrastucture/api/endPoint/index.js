const BASE_URL = "https://jsonplaceholder.typicode.com/";
const FLAG_API =
	"https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json";

const ENDPOINT = {
	USERS: `${BASE_URL}users`,
	POSTS: `${BASE_URL}posts`,
	ALBUMS: `${BASE_URL}album`,
	FLAGS: `${FLAG_API}`,
};

export default ENDPOINT;

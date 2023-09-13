// --- container
import Home from "@container/Home";

// --- SEO
import SEO from "@util/SEO";
export const metadata = SEO({
	title: "Home",
	description: "Home",
	keywords: "home",
});

const getData = async () => {
	const res = await fetch("https://dummyjson.com/users");
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

const HomePage = async () => {
	const data = await getData();
	return <Home dataUser={data} />;
};

export default HomePage;

import SEOData from "@config/SEOData";

const SEO = (data) => {
	const defaultData = { ...SEOData.data };
	const titleSEO = data?.title
		? data?.title + " | " + defaultData.title
		: defaultData.title;
	const descriptionSEO = data?.description
		? data?.description + " | " + defaultData.description
		: defaultData.description;
	const keywordsSEO = data?.keywords
		? data?.keywords + ", " + defaultData.keywords
		: defaultData.keywords;
	const ogImageFacebookSEO = data?.imageOgFacebook
		? data?.imageOgFacebook
		: defaultData.imageOgFacebook;
	const viewportSEO = data?.viewport ? data?.viewport : defaultData.viewport;
	const urlSEO = data?.url;
	const siteNameSEO = defaultData.siteName;

	return {
		// - main
		title: titleSEO,
		description: descriptionSEO,
		keywords: keywordsSEO,
		// - viewport
		viewport: viewportSEO,
		// - openGraph
		openGraph: {
			title: titleSEO,
			description: descriptionSEO,
			url: urlSEO,
			siteName: siteNameSEO,
			images: ogImageFacebookSEO,
			locale: "en_US",
			type: "website",
		},
		icons: {
			icon: defaultData.icons?.default,
			shortcut: defaultData.icons?.default,
			apple: defaultData.icons?.apple,
			other: {
				rel: "apple-touch-icon",
				url: defaultData.icons?.apple57,
				sizes: "57x57",
			},
		},
	};
};

export default SEO;

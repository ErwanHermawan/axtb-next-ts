const footerData = {
	subscriber: {
		title: "Berlangganan Newsletter!",
		description:
			"Dapatkan informasi terbaru tentang layanan, produk dan promo BARON & CO dengan mengisi emailmu!",
	},
	logo: {
		src: "logo-primary.svg",
		to: "/",
		alt: "Baron & Co",
	},
	about:
		"BARON & CO adalah solusi untuk perawatan sepatu yang tepat dengan hasil maksimal. <span>Melangkah tanpa ragu, melangkah yang berarti. TAKE THELEAP!</span>",
	nav: [
		{
			title: "Tentang Kami",
			menu: [
				{
					to: "about",
					text: "Tentang Kami",
					classActive: "about",
				},
				{
					to: "gallery",
					text: "Galeri",
					classActive: "gallery",
				},
				{
					to: "contact",
					text: "Kontak Kami",
					classActive: "contact",
				},
				{
					to: "sitemap",
					text: "Sitemap",
					classActive: "sitemap",
				},
			],
		},
		{
			title: "Layanan",
			menu: [
				{
					to: "services",
					text: "Layanan",
					classActive: "services",
				},
				{
					to: "process",
					text: "Proses",
					classActive: "process",
				},
				{
					to: "product",
					text: "Produk",
					classActive: "product",
				},
			],
		},
	],
	office: {
		title: "Jam Buka",
		openHour: "9 AM - 10 PM, Senin-Sabtu",
		address:
			"Jl. Raya Cipasung RT.09 / RW.03 Kecamatan Darma, Kabupaten Kuningan, Jawa Barat 45562",
	},
	sosmed: [
		{
			to: "tiktok.com",
			icon: "tiktok.svg",
		},
		{
			to: "twitter.com",
			icon: "twitter.svg",
		},
		{
			to: "instagram.com",
			icon: "instagram.svg",
		},
		{
			to: "facebook.com",
			icon: "facebook.svg",
		},
		{
			to: "linkedin.com",
			icon: "linkedin.svg",
		},
	],
};

export default footerData;

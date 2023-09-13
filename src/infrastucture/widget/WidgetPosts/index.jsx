"use client";

// --- components
import SectionPost from "@organism/SectionPost";

// --- models
import { usePost } from "@model/posts";

const WidgetPosts = () => {
	const { data: dataUser, error: errorUser } = usePost();

	return (
		<SectionPost title="New Posts" data={dataUser} error={errorUser?.message} />
	);
};

export default WidgetPosts;

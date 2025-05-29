import React from "react";

const CategoryPage = () => {
	const { slug } = useParams();
	console.log(slug);
	return <div>CategoryPage</div>;
};

export default CategoryPage;

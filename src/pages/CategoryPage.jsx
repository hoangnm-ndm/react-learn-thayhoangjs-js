import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
	const { slug } = useParams();
	console.log(slug);
	return <div>CategoryPage</div>;
};

export default CategoryPage;

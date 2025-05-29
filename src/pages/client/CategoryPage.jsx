import React from "react";
import { useSearchParams } from "react-router-dom";

const CategoryPage = () => {
	const [searchParams] = useSearchParams();
	const queries = Object.fromEntries(searchParams.entries());
	console.log(queries);
	return (
		<div>
			{JSON.stringify(queries)}
			<p>{queries.cate ? queries.cate : "all"}</p>
		</div>
	);
};

export default CategoryPage;

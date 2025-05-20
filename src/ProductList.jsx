import React from "react";
import useFetchList from "./hooks/useFetchList";
import useQuery from "./hooks/useQuery";

const ProductList = () => {
	const [query, updateQuery, resetQuery] = useQuery({
		q: "",
		limit: 12,
		skip: 0,
		sortBy: "createdAt",
		order: "asc",
	});
	const [data] = useFetchList("products", query);
	console.log(data);
	const handleSort = (e) => {
		const valueSelect = JSON.parse(e.target.value);
		console.log(valueSelect);
		updateQuery(valueSelect);
	};
	return (
		<div>
			<h2>Danh sach san pham</h2>
			<select name="sortBy" id="sortBy" onChange={handleSort}>
				<option value={`{ "sortBy": "", "order": "" }`}>Sắp xếp</option>
				<option value={`{ "sortBy": "price", "order": "asc" }`}>Giá tăng dần</option>
				<option value={`{ "sortBy": "price", "order": "desc" }`}>Giá giảm dần</option>
				<option value={`{ "sortBy": "rating", "order": "desc" }`}>Lượt đánh giá cao nhất</option>
			</select>
			<div>
				{data &&
					data.map((item) => (
						<div>
							<h2>{item.title}</h2>
							<p>Giá: {item.price}</p>
							<p>Đánh giá: {item.rating}</p>
						</div>
					))}
			</div>
		</div>
	);
};

export default ProductList;

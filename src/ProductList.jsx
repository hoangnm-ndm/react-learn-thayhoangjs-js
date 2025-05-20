import React from "react";
import useFetchList from "./hooks/useFetchList";
import useQuery from "./hooks/useQuery";

const ProductList = () => {
	const [query, updateQuery, resetQuery] = useQuery({
		q: "",
		limit: 12,
		page: 1,
		sortBy: "createdAt",
		order: "asc",
	});
	const [data] = useFetchList("products", query);
	console.log(data);
	const handleSort = (e) => {
		const valueSelect = JSON.parse(e.target.value);
		updateQuery(valueSelect);
	};

	const handlePage = (page) => {
		console.log(page);
		updateQuery({ page });
	};

	const handleLimit = (e) => {
		console.log(e.target.value);
		updateQuery({ limit: e.target.value });
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
			<p>
				Hiển thị tối đa{" "}
				<select name="limit" id="limit" onChange={handleLimit}>
					<option value={10}>10</option>
					<option value={20}>20</option>
				</select>{" "}
				sản phẩm/trang
			</p>

			<div>
				{data &&
					data.map((item) => (
						<div key={item.id}>
							<h2>{item.title}</h2>
							<p>Giá: {item.price}</p>
							<p>Đánh giá: {item.rating}</p>
						</div>
					))}
			</div>
			<button onClick={() => handlePage(query.page - 1)} disabled={query.page === 1}>
				Preview
			</button>
			<span>Page: {query.page}</span>
			<button onClick={() => handlePage(query.page + 1)}>Next</button>
		</div>
	);
};

export default ProductList;

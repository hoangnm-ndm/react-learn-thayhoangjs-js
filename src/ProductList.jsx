import React from "react";
import useFetchList from "./hooks/useFetchList";
import useQuery from "./hooks/useQuery";

const sortOptions = [
	{ label: "Sắp xếp", value: {} },
	{ label: "Giá tăng dần", value: { sortBy: "price", order: "asc" } },
	{ label: "Giá giảm dần", value: { sortBy: "price", order: "desc" } },
	{ label: "Lượt đánh giá cao nhất", value: { sortBy: "rating", order: "desc" } },
	{ label: "Tên từ a-z", value: { sortBy: "title", order: "asc" } },
	{ label: "Tên từ a-z", value: { sortBy: "title", order: "desc" } },
];
const ProductList = () => {
	const [query, updateQuery, resetQuery] = useQuery({
		q: "",
		limit: 12,
		page: 1,
		sortBy: "createdAt",
		order: "asc",
	});
	const [data] = useFetchList("products", query);

	const handleSearch = (e) => {
		const value = e.target.value;
		updateQuery({ q: value, page: 1 });
	};

	const handleSort = (e) => {
		const valueSelect = JSON.parse(e.target.value);
		updateQuery(valueSelect);
	};

	const handlePage = (page) => {
		console.log(page);
		updateQuery({ page });
	};

	const handleLimit = (e) => {
		updateQuery({ limit: Number(e.target.value), page: 1 });
	};
	return (
		<div>
			<h2>Danh sach san pham</h2>

			<input type="text" placeholder="Tìm sản phẩm..." onChange={handleSearch} />

			<select onChange={handleSort}>
				{sortOptions.map((opt, i) => (
					<option key={i} value={i}>
						{opt.label}
					</option>
				))}
			</select>
			<p>
				Hiển thị tối đa{" "}
				<select name="limit" onChange={handleLimit} value={query.limit}>
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
							<p>{item.description}</p>
						</div>
					))}
			</div>
			<button onClick={() => handlePage(query.page - 1)} disabled={query.page === 1}>
				Previous
			</button>
			<span>Page: {query.page}</span>
			<button onClick={() => handlePage(query.page + 1)}>Next</button>
		</div>
	);
};

export default ProductList;

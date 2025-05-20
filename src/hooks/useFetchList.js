/**
 * input (các tham số tuỳ chỉnh khi gọi danh sách: query)
 * output: danh sách lấy được
 */

import { useEffect, useState } from "react";
import api from "../api";

const useFetchList = (path, query) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const skip = (query.page - 1) * query.limit;
				query.skip = skip;
				const queryString = new URLSearchParams(query).toString();
				console.log(`${path}/search?${queryString}`);
				const res = await api.get(`${path}/search?${queryString}`);
				console.log(res);
				setData(res.data.products);
			} catch (error) {
				console.log(error);
			}
		};

		fetchProduct();
	}, [path, JSON.stringify(query)]);
	return [data];
};

export default useFetchList;

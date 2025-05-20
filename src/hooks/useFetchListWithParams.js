import { useEffect, useState } from "react";
import api from "../api";

const useFetchListWithParams = (path, params) => {
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchList = async () => {
		try {
			setLoading(true);
			let paramsString = new URLSearchParams(params).toString();
			paramsString = paramsString.replace("search", "search?q");
			const { data } = await api.get(`${path}/${paramsString}`);
			setList(data[path]);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error.message || "Failed!");
			console.log(error);
		}
	};

	useEffect(() => {
		fetchList();
	}, [params.limit, params.page]);
	return [list, loading, error];
};

export default useFetchListWithParams;

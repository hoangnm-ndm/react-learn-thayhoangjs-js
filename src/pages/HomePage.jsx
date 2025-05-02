import React, { useEffect, useState } from "react";

const HomePage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return <>{JSON.stringify(products)}</>;
};

export default HomePage;

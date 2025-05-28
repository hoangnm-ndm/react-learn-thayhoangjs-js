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

	return (
		<>
			<h1>San pham ban chay</h1>
			<div>
				{products.map((item) => (
					<div key={item.id}>
						<h2>
							{item.title} - {item.price}
						</h2>
					</div>
				))}
			</div>
		</>
	);
};

export default HomePage;

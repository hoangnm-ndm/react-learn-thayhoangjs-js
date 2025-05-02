import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductTablePage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/products")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setProducts(data);
			})
			.catch((error) => console.error("Error fetching products:", error));
	}, []);
	return (
		<>
			<table className="table table-striped table-bordered">
				<thead className="text-center table-dark">
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Price</th>
						<th>Category</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{products &&
						products.map((product) => (
							<tr key={product.id}>
								<td>{product.id}</td>
								<td>
									<Link to={`edit/${product.id}`}>{product.name}</Link>
								</td>
								<td>{product.price}</td>
								<td>{product.category}</td>
								<td>
									<button className="btn btn-danger">Delete</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	);
};

export default ProductTablePage;

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductFromPage() {
	const { id } = useParams();
	const nav = useNavigate();
	const [formData, setFormData] = useState({
		name: "",
		price: "",
		category: "",
	});

	useEffect(() => {
		fetch("http://localhost:3000/products/" + id)
			.then((response) => response.json())
			.then((data) => {
				setFormData(data);
			})
			.catch((error) => console.error("Error fetching products:", error));
	}, [id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const clearSelection = () => {
		setFormData({
			name: "",
			price: "",
			category: "",
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (id) {
			fetch(`http://localhost:3000/products/${id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log("Product updated:", data);
				})
				.catch((error) => console.error("Error updating product:", error));
		} else {
			fetch("http://localhost:3000/products", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log("Product added:", data);
				})
				.catch((error) => console.error("Error adding product:", error));
		}
		nav("/admin/products");
	};

	return (
		<form onSubmit={handleSubmit} className="mb-4">
			<h4>{id ? "Edit Product" : "Add Product"}</h4>
			<div className="mb-3">
				<input
					type="text"
					className="form-control"
					name="name"
					placeholder="Product Name"
					value={formData.name}
					onChange={handleChange}
				/>
			</div>
			<div className="mb-3">
				<input
					type="number"
					className="form-control"
					name="price"
					placeholder="Price"
					value={formData.price}
					onChange={handleChange}
				/>
			</div>

			<div className="mb-3">
				<input
					type="text"
					className="form-control"
					name="category"
					placeholder="Category"
					value={formData.category}
					onChange={handleChange}
				/>
			</div>
			<button className="btn btn-primary me-2" type="submit">
				{id ? "Update" : "Add"}
			</button>
			{id && (
				<button className="btn btn-secondary" onClick={clearSelection} type="button">
					Cancel
				</button>
			)}
		</form>
	);
}

export default ProductFromPage;

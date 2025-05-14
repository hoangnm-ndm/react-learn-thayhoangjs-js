import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { productSchema } from "../../schemas/productSchema";
import { createProduct, getProductById, updateProduct } from "../../api/productApi";

const initFormValues = {
	name: "",
	price: "",
	category: "",
};

function ProductFormPage() {
	const { id } = useParams();
	const nav = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(productSchema),
		defaultValues: initFormValues,
	});

	useEffect(() => {
		if (id) {
			getProductById(id)
				.then((res) => reset(res.data))
				.catch((err) => console.error("Error fetching product:", err));
		}
	}, [id, reset]);

	const onSubmit = async (data) => {
		try {
			if (id) {
				await updateProduct(id, data);
			} else {
				await createProduct(data);
			}
			nav("/admin/products");
		} catch (err) {
			console.error("Error submitting:", err);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="mb-4">
			<h4>{id ? "Edit Product" : "Add Product"}</h4>

			<div className="mb-3">
				<input
					type="text"
					className={`form-control ${errors.name ? "is-invalid" : ""}`}
					placeholder="Product Name"
					{...register("name")}
				/>
				{errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
			</div>

			<div className="mb-3">
				<input
					type="number"
					step="0.01"
					className={`form-control ${errors.price ? "is-invalid" : ""}`}
					placeholder="Price"
					{...register("price")}
				/>
				{errors.price && <div className="invalid-feedback">{errors.price.message}</div>}
			</div>

			<div className="mb-3">
				<input
					type="text"
					className={`form-control ${errors.category ? "is-invalid" : ""}`}
					placeholder="Category"
					{...register("category")}
				/>
				{errors.category && <div className="invalid-feedback">{errors.category.message}</div>}
			</div>

			<button className="btn btn-primary me-2" type="submit">
				{id ? "Update" : "Add"}
			</button>
			{id && (
				<button className="btn btn-secondary" type="button" onClick={() => reset(initFormValues)}>
					Cancel
				</button>
			)}
		</form>
	);
}

export default ProductFormPage;

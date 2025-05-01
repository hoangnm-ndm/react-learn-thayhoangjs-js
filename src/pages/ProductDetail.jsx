import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
	const { id } = useParams();
	return <div>Trang chi tiet san pham {id}</div>;
};

export default ProductDetail;

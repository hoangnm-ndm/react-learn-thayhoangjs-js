import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
	return (
		<div>
			Cảm ơn bạn đã mua hàng tại Shop. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất. Mã đơn hàng của bạn là:{" "}
			<strong>123456</strong>
			Quay về <Link to="/">trang chủ</Link> để tiếp tục mua sắm.
		</div>
	);
};

export default CheckoutSuccessPage;

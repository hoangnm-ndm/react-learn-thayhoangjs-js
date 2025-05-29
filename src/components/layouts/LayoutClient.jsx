import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

const LayoutClient = () => {
	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default LayoutClient;

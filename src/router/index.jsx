import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LayoutClient from "../components/layouts/LayoutClient";
import LayoutAdmin from "../components/layouts/LayoutAdmin";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProfilePage from "../pages/ProfilePage";

import DashboardPage from "../pages/admin/DashboardPage";
import SettingPage from "../pages/admin/SettingPage";
import ProductFormPage from "../pages/admin/ProductFormPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutClient />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "about", element: <AboutPage /> },
			{ path: "products/:id", element: <ProductDetailPage /> },
			{ path: "me/profile", element: <ProfilePage /> },
		],
	},
	{
		path: "/admin",
		element: <LayoutAdmin />,
		children: [
			{ path: "", element: <DashboardPage /> },
			{ path: "products", element: <ProductDetailPage /> },
			{ path: "settings", element: <SettingPage /> },
			{ path: "products/edit/:id", element: <ProductFormPage /> },
			{ path: "products/add", element: <ProductFormPage /> },
			{ path: "products/update/:id", element: <ProductFormPage /> },
		],
	},
	{ path: "/login", element: <LoginPage /> },
	{ path: "/register", element: <RegisterPage /> },
	{ path: "*", element: <NotFoundPage /> },
]);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}

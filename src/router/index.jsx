import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "../layouts/LayoutAdmin";
import LayoutClient from "../layouts/LayoutClient";
import AboutPage from "../pages/AboutPage";
import DashboardPage from "../pages/admin/DashboardPage";
import ProductFormPage from "../pages/admin/ProductFormPage";
import ProductTablePage from "../pages/admin/ProductTablePage";
import SettingPage from "../pages/admin/SettingPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import Profile from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutClient />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "about", element: <AboutPage /> },
			{ path: "products/:id", element: <ProductDetailPage /> },
			{ path: "me/profile", element: <Profile /> },
		],
	},
	{
		path: "/admin",
		element: <AdminLayout />,
		children: [
			{ path: "", element: <DashboardPage /> },
			{ path: "products", element: <ProductTablePage /> },
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

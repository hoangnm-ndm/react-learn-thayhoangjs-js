import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import ClientLayout from "../layouts/ClientLayout";
import AboutPage from "../pages/AboutPage";
import ProductDetail from "../pages/ProductDetail";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/admin/DashboardPage";
import ProductTablePage from "../pages/admin/ProductTablePage";
import ProductFormPage from "../pages/admin/ProductFormPage";
import Profile from "../pages/ProfilePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ClientLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "about", element: <AboutPage /> },
			{ path: "products/:id", element: <ProductDetail /> },
			{ path: "me/profile", element: <Profile /> },
		],
	},
	{
		path: "/admin",
		element: <AdminLayout />,
		children: [
			{ path: "", element: <DashboardPage /> },
			// { path: "users", element: <DashboardPage /> },
			{ path: "products", element: <ProductTablePage /> },
			// { path: "settings", element: <DashboardPage /> },
			{ path: "products/edit/:id", element: <ProductFormPage /> },
			{ path: "products/add", element: <ProductFormPage /> },
		],
	},
	{ path: "/login", element: <LoginPage /> },
	{ path: "/register", element: <RegisterPage /> },
	{ path: "*", element: <NotFoundPage /> },
]);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}

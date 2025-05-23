// src/router/AppRouter.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from "../pages/AboutPage";
import ProductDetail from "../pages/ProductDetail";
import ClientLayout from "../layouts/ClientLayout";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/admin/DashboardPage";
import ProtectedRoute from "../components/ProtectedRoute";
import UnauthorizedPage from "../pages/UnauthorizedPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ClientLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/about", element: <AboutPage /> },
			{ path: "/products/:id", element: <ProductDetail /> },
		],
	},
	{
		path: "/admin",
		element: (
			<ProtectedRoute allowedRoles={["admin", "superAdmin"]}>
				<AdminLayout />
			</ProtectedRoute>
		),
		children: [
			{ path: "dashboard", element: <DashboardPage /> },
			// { path: "products", element: <ProductListPage /> },
			// { path: "users", element: <UserListPage /> },
			// { path: "orders", element: <OrderListPage /> },
		],
	},
	{ path: "/login", element: <LoginPage /> },
	{ path: "/register", element: <RegisterPage /> },
	{ path: "/unauthorized", element: <UnauthorizedPage /> },
	{ path: "*", element: <NotFoundPage /> },
]);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}

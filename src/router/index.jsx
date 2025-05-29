import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "../layouts/LayoutAdmin";
import LayoutClient from "../layouts/LayoutClient";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import adminRoutes from "./adminRoutes";
import clientRoutes from "./clientRoutes";

const router = createBrowserRouter([
	// Client routes
	{
		path: "/",
		element: <LayoutClient />,
		children: clientRoutes,
	},

	// Admin routes
	{
		path: "/admin",
		element: <AdminLayout />,
		children: adminRoutes,
	},

	// Empty routes
	{ path: "/login", element: <LoginPage /> },
	{ path: "/register", element: <RegisterPage /> },
	{ path: "*", element: <NotFoundPage /> },
]);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}

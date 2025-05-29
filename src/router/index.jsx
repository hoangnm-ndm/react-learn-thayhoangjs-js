import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/common/LoginPage";
import NotFoundPage from "../pages/common/NotFoundPage";
import RegisterPage from "../pages/common/RegisterPage";
import adminRoutes from "./adminRoutes";
import clientRoutes from "./clientRoutes";
import LayoutAdmin from "../components/layouts/LayoutAdmin";
import LayoutClient from "../components/layouts/LayoutClient";

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
		element: <LayoutAdmin />,
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

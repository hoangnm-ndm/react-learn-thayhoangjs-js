import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import ClientLayout from "../layouts/ClientLayout";
import AboutPage from "../pages/AboutPage";
import ProductDetail from "../pages/ProductDetail";

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
	{ path: "/login", element: <LoginPage /> },
	{ path: "/register", element: <RegisterPage /> },
	{ path: "*", element: <NotFoundPage /> },
]);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}

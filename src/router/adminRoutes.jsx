import DashboardPage from "../pages/admin/DashboardPage";
import ProductTablePage from "../pages/admin/ProductTablePage";
import SettingPage from "../pages/admin/SettingPage";
import ProductFormPage from "../pages/admin/ProductFormPage";

const adminRoutes = [
	{ index: true, element: <DashboardPage /> },
	{ path: "settings", element: <SettingPage /> },
	{ path: "me/profile", element: <DashboardPage /> }, // User profile page

	// * Products routes
	{ path: "products", element: <ProductTablePage /> },
	{ path: "products/edit/:id", element: <ProductFormPage /> },
	{ path: "products/add", element: <ProductFormPage /> },

	// * Categories routes
	{ path: "categories", element: <ProductTablePage /> },
	{ path: "categories/edit/:id", element: <ProductFormPage /> },
	{ path: "categories/add", element: <ProductFormPage /> },

	// * Orders routes
	{ path: "orders", element: <ProductTablePage /> },
	{ path: "orders/edit/:id", element: <ProductFormPage /> },
	{ path: "orders/add", element: <ProductFormPage /> },

	// * Users routes
	{ path: "users", element: <ProductTablePage /> },
	{ path: "users/edit/:id", element: <ProductFormPage /> },
	{ path: "users/add", element: <ProductFormPage /> },

	// * Blog routes
	{ path: "blogs", element: <ProductTablePage /> },
	{ path: "blogs/edit/:id", element: <ProductFormPage /> },
	{ path: "blogs/add", element: <ProductFormPage /> },
];

export default adminRoutes;

import DashboardPage from "../pages/admin/DashboardPage";
import ProductTablePage from "../pages/admin/ProductTablePage";
import SettingPage from "../pages/admin/SettingPage";
import ProductFormPage from "../pages/admin/ProductFormPage";

const adminRoutes = [
	{ index: true, element: <DashboardPage /> },
	{ path: "products", element: <ProductTablePage /> },
	{ path: "settings", element: <SettingPage /> },
	{ path: "products/edit/:id", element: <ProductFormPage /> },
	{ path: "products/add", element: <ProductFormPage /> },
	{ path: "products/update/:id", element: <ProductFormPage /> },
];

export default adminRoutes;

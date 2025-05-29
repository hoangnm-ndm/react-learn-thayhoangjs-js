import AboutPage from "../pages/AboutPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import BlogListPage from "../pages/BlogListPage";
import CartPage from "../pages/CartPage";
import CategoryPage from "../pages/CategoryPage";
import CheckoutPage from "../pages/CheckoutPage";
import CheckoutSuccessPage from "../pages/CheckoutSuccessPage";
import ContactPage from "../pages/ContactPage";
import FAQPage from "../pages/FAQPage";
import HomePage from "../pages/HomePage";
import OrderPage from "../pages/OrderPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProductListPage from "../pages/ProductListPage";
import ProfilePage from "../pages/ProfilePage";
import TermsPage from "../pages/TermsPage";
import WishListProductPage from "../pages/WishListProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";

const clientRoutes = [
	// common
	{ index: true, element: <HomePage /> },
	{ path: "about", element: <AboutPage /> },
	{ path: "contact", element: <ContactPage /> },
	{ path: "faq", element: <FAQPage /> },
	{ path: "terms", element: <TermsPage /> },
	{ path: "privacy", element: <PrivacyPage /> },

	// products
	{ path: "products", element: <ProductListPage /> },
	{ path: "products/:id", element: <ProductDetailPage /> },
	{ path: "categories/:slug", element: <CategoryPage /> },

	// cart
	{ path: "cart", element: <CartPage /> },
	{ path: "checkout", element: <CheckoutPage /> },
	{ path: "checkout-success", element: <CheckoutSuccessPage /> },

	// blog
	{ path: "blogs", element: <BlogListPage /> },
	{ path: "blogs/:slug", element: <BlogDetailPage /> },

	// user
	{ path: "me/profile", element: <ProfilePage /> },
	{ path: "me/orders", element: <OrderPage /> },
	{ path: "me/wishlist", element: <WishListProductPage /> },
];

export default clientRoutes;

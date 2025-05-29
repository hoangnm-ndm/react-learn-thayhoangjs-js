import AboutPage from "../pages/client/AboutPage";
import BlogDetailPage from "../pages/client/BlogDetailPage";
import BlogListPage from "../pages/client/BlogListPage";
import CartPage from "../pages/client/CartPage";
import CategoryPage from "../pages/client/CategoryPage";
import CheckoutPage from "../pages/client/CheckoutPage";
import CheckoutSuccessPage from "../pages/client/CheckoutSuccessPage";
import ContactPage from "../pages/client/ContactPage";
import FAQPage from "../pages/client/FAQPage";
import HomePage from "../pages/client/HomePage";
import OrderPage from "../pages/client/OrderPage";
import PrivacyPage from "../pages/client/PrivacyPage";
import ProductListPage from "../pages/client/ProductListPage";
import ProfilePage from "../pages/client/ProfilePage";
import TermsPage from "../pages/client/TermsPage";
import WishListProductPage from "../pages/client/WishListProductPage";
import ProductDetailPage from "../pages/client/ProductDetailPage";

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

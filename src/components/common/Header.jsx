import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
	const { t } = useTranslation();

	const isAuthenticated = false; // Thay bằng hook auth thực tế sau khi học redux và context API

	return (
		<header className="border-bottom py-2 px-3">
			<div className="container-fluid">
				<div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
					{/* Logo */}
					<div className="logo">
						<Link to="/" className="text-decoration-none fw-bold fs-4 text-dark">
							MyShop
						</Link>
					</div>

					{/* Menu trung tâm */}
					<nav className="d-none d-md-block">
						<ul className="nav gap-2">
							<li className="nav-item">
								<Link className="nav-link" to="/">
									{t("navbar.home")}
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/products">
									{t("navbar.products")}
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/categories">
									{t("navbar.categories")}
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									{t("navbar.about")}
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									{t("navbar.contact")}
								</Link>
							</li>
						</ul>
					</nav>

					{/* User control */}
					<div className="d-flex align-items-center gap-3 ms-auto">
						<ThemeToggle />
						<LanguageToggle />

						{/* User menu */}
						<div className="dropdown">
							<button
								className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1"
								id="userDropdown"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<FaUserCircle size={18} />
								<span className="d-none d-sm-inline">{isAuthenticated ? t("navbar.account") : t("navbar.login")}</span>
							</button>
							<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
								{isAuthenticated ? (
									<>
										<li>
											<Link className="dropdown-item" to="/profile">
												{t("navbar.profile")}
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/settings">
												{t("navbar.settings")}
											</Link>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<button className="dropdown-item text-danger">{t("navbar.logout")}</button>
										</li>
									</>
								) : (
									<>
										<li>
											<Link className="dropdown-item" to="/login">
												{t("navbar.login")}
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/register">
												{t("navbar.register")}
											</Link>
										</li>
									</>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

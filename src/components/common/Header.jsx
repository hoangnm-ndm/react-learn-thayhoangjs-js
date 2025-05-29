import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import { FaUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Header = () => {
	const { t } = useTranslation();
	const isAuthenticated = false;

	return (
		<header className="border-bottom py-2 px-1">
			<div className="container-fluid">
				<div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
					{/* Logo */}
					<div className="logo">
						<Link to="/" className="text-decoration-none fw-bold fs-4 text-dark">
							CF Store
						</Link>
					</div>

					{/* Hamburger button for mobile */}
					<button
						className="btn d-lg-none"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#mobileNavbar"
						aria-controls="mobileNavbar"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<FiMenu size={24} />
					</button>

					{/* Desktop menu */}
					<nav className="d-none d-lg-block">
						<ul className="nav gap-1">
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

					{/* User controls - only on desktop */}
					<div className="d-none d-lg-flex align-items-center gap-3 ms-auto">
						<ThemeToggle />
						<LanguageToggle />

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

				{/* Mobile menu: nav + theme + language + user */}
				<div className="collapse d-lg-none mt-2" id="mobileNavbar">
					<ul className="nav flex-column gap-2">
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

						<hr />

						{/* Theme and Language for mobile */}
						<li className="nav-item px-3">
							<ThemeToggle />
						</li>
						<li className="nav-item px-3">
							<LanguageToggle />
						</li>

						<hr />

						{/* User menu for mobile */}
						{isAuthenticated ? (
							<>
								<li className="nav-item">
									<Link className="nav-link" to="/profile">
										{t("navbar.profile")}
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/settings">
										{t("navbar.settings")}
									</Link>
								</li>
								<li className="nav-item">
									<button className="nav-link text-danger btn btn-link p-0">{t("navbar.logout")}</button>
								</li>
							</>
						) : (
							<>
								<li className="nav-item">
									<Link className="nav-link" to="/login">
										{t("navbar.login")}
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/register">
										{t("navbar.register")}
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;

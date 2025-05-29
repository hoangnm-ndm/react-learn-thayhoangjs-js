import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Header = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
	};

	return (
		<header className="d-flex justify-content-between align-items-center p-3 border-bottom gap-2">
			<div className="logo">
				<Link to="/" className="text-decoration-none fw-bold text-dark">
					Logo
				</Link>
			</div>

			<Nav>
				<ul className="nav">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							{t("navbar.home")}
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
			</Nav>

			<div className="ms-auto d-flex align-items-center gap-2">
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="languageDropdown"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						{t("navbar.language")}
					</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
						<li>
							<button className="dropdown-item" onClick={() => changeLanguage("en")}>
								🇬🇧 English
							</button>
						</li>
						<li>
							<button className="dropdown-item" onClick={() => changeLanguage("vi")}>
								🇻🇳 Tiếng Việt
							</button>
						</li>
					</ul>
				</div>

				<ThemeToggle />
			</div>
		</header>
	);
};

export default Header;

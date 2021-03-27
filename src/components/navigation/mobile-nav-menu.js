import { NavLink } from "react-router-dom";
import CotizationsLinks from "./links/cotizations-links";
import AuthBtns from "./auth-btns";
import close from "../../assets/miscellaneous/navigation/close.svg";
import logoLight from "../../assets/company/logo-light.svg";

const MobileNavMenu = ({ isNavOpen, setNavState }) => {
	return (
		<div
			className={`nav mobile-nav-menu bg-primary-100 text-neutral-1000 ${
				isNavOpen ? "mobile-nav-menu--show" : "mobile-nav-menu--hide"
			}`}
		>
			<div className="flex-row-between mobile-nav-menu__top">
				<img src={logoLight} alt="logo" className="nav__logo" />
				<img src={close} alt="close" onClick={setNavState} className="padding-100" />
			</div>
			<ul className="mobile-nav-menu__links-container">
				<li>
					<NavLink
						to="/"
						className="mobile-nav-menu__links"
						activeClassName="nav__links-active"
					>
						<h5>Inicio</h5>
					</NavLink>
				</li>
				<li>
					<NavLink to="/nostros" className="mobile-nav-menu__links">
						<h5>Nosotros</h5>
					</NavLink>
				</li>
				<ul>
					<h5>Cotizaciones: </h5>
					<CotizationsLinks />
				</ul>
			</ul>
			<AuthBtns isMobileNav={"true"} />
		</div>
	);
};

export default MobileNavMenu;

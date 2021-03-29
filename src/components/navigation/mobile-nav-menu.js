import CotizationsLinks from "./dropdown-links/cotizations-links";
import AuthBtns from "./auth-btns";
import close from "../../assets/miscellaneous/navigation/close.svg";
import logoLight from "../../assets/company/logo-light.svg";

const MobileNavMenu = ({ isNavOpen, setNavState }) => {
	return (
		<div
			className={`mobile-nav-menu bg-primary-100 text-neutral-1000 ${
				isNavOpen ? "mobile-nav-menu--show" : "mobile-nav-menu--hide"
			}`}
		>
			<div className="flex-row-between container mobile-nav-menu__top">
				<img src={logoLight} alt="logo" className="nav__logo" />
				<img src={close} alt="close" onClick={setNavState} className="padding-100" />
			</div>
			<ul className="mobile-nav-menu__links-container">
				<li>
					<a href="/" className="mobile-nav-menu__links">
						<h5>Inicio</h5>
					</a>
				</li>
				<li>
					<a href="/nostros" className="mobile-nav-menu__links">
						<h5>Nosotros</h5>
					</a>
				</li>
				<ul className="mobile-nav-menu__dropdown-links">
					<h5>Cotizaciones: </h5>
					<CotizationsLinks />
				</ul>
			</ul>
			<AuthBtns />
		</div>
	);
};

export default MobileNavMenu;

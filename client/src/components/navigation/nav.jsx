import React from "react";
import { useNavContext } from "../shared/states/nav-context";
import Dropdown from "./dropdown.jsx";
import CotizationsLinks from "./dropdown-links/cotizations-links.jsx";
import AuthBtns from "./auth-btns.jsx";

const Nav = () => {
	const {
		state: { linksColor, logo },
	} = useNavContext();
	return (
		<div className="nav-container" data-aos="fade-down" data-aos-duration="1000">
			<nav className={`flex-row-between nav desktop-nav ${linksColor}`}>
				<ul className="flex-row-center">
					<li>
						<a className="nav__link" href="/">
							<img src={logo} alt="logo" className="nav__logo" />
						</a>
					</li>
					<li>
						<Dropdown type="Cotizaciones">
							<CotizationsLinks />
						</Dropdown>
					</li>
					<li>
						<a href="/nosotros" className="nav__links">
							Nostros
						</a>
					</li>
				</ul>
				<AuthBtns />
			</nav>
		</div>
	);
};

export default Nav;

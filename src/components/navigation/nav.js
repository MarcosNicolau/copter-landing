import { useNavContext } from "../shared/states/nav-context";
import Dropdown from "./dropdown";
import CotizationsLinks from "./dropdown-links/cotizations-links";
import AuthBtns from "./auth-btns";
import logo from "../../assets/company/logo.svg";
import logoLight from "../../assets/company/logo-light.svg";

const Nav = () => {
	const {
		state: { linksColor, areImgsLight },
	} = useNavContext();
	return (
		<div className="nav-container" data-aos="fade-down" data-aos-duration="1000">
			<nav className={`flex-row-between nav desktop-nav ${linksColor}`}>
				<ul className="flex-row-center">
					<li>
						<a className="nav__link" href="/">
							<img
								src={areImgsLight ? logoLight : logo}
								alt="logo"
								className="nav__logo"
							/>
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

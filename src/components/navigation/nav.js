import { useNavContext } from "../shared/states/nav-context";
import { NavLink } from "react-router-dom";
import Dropdown from "./dropdown";
import CotizationsLinks from "./links/cotizations-links";
import AuthBtns from "./auth-btns";
import logo from "../../assets/company/logo.svg";
import logoLight from "../../assets/company/logo-light.svg";

const Nav = () => {
	const {
		state: { linksColor, areImgsLight },
	} = useNavContext();
	return (
		<nav
			className={`flex-row nav desktop-nav `}
			id={`${linksColor}`}
			data-aos="fade-down"
			data-aos-duration="1000"
		>
			<ul className="flex-row-center">
				<li>
					<NavLink className="nav__link" to="/" exact>
						<img
							src={areImgsLight ? logoLight : logo}
							alt="logo"
							className="nav__logo"
						/>
					</NavLink>
				</li>
				<li>
					<Dropdown type="Cotizaciones">
						<CotizationsLinks />
					</Dropdown>
				</li>
				<li>
					<NavLink
						to="/nosotros"
						className={`nav__links`}
						activeClassName="nav__active-link"
					>
						Nostros
					</NavLink>
				</li>
			</ul>
			<AuthBtns />
		</nav>
	);
};

export default Nav;

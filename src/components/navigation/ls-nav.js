import { NavLink } from 'react-router-dom';
import CotizationDropdown from './dropdowns/cotizations-dropdown';
import AuthBtns from './auth-btns';
import logo from '../../assets/company/logo.svg';
import logoLight from '../../assets/company/logo-light.svg';
import '../../styles/style.scss';

const Nav = ({ isLight, areButtonsLight }) => {
    return (
        <nav
            data-aos="fade-down"
            data-aos-duration="1500"
            className={`flex-row nav  ${isLight ? 'text-neutral-1000' : 'text-primary-100'}`}
        >
            <ul className="flex-row-center">
                <li>
                    <NavLink className="nav__link" to="/" exact>
                        <img src={isLight ? logoLight : logo} alt="logo" className="nav__logo" />
                    </NavLink>
                </li>
                <CotizationDropdown isLight={isLight} />
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

import { NavLink } from 'react-router-dom';
import logo from '../../assets/company/logo.svg';
import '../../styles/layout/navigation.scss';
import '../../styles/style.scss';

const Nav = () => {
    return (
        <nav className="flex-row">
            <ul className="flex-row-center">
                <li>
                    <NavLink to="/" exact>
                        <img src={logo} alt="logo" className="logo" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/nosotros" className="links" activeClassName="active-link">
                        Cotizaciones
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/nosotros" className="links" activeClassName="active-link">
                        Nostros
                    </NavLink>
                </li>
            </ul>
            <div className="btn-1">
                <NavLink to="/nosotros">Hello</NavLink>
                <NavLink to="/nosotros">Hello</NavLink>
            </div>
        </nav>
    );
};

export default Nav;

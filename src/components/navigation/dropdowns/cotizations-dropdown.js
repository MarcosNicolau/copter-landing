import { NavLink } from 'react-router-dom';
import Dropdown from './dropdown';

const CotizationDropdown = ({ isLight }) => {
    return (
        <Dropdown type="Cotizaciones" isLight={isLight}>
            <li>
                <NavLink
                    activeClassName="nav__dropdown__active-link"
                    className="nav__links"
                    to="/cotizaciones/bitcoin"
                >
                    Bitcoin
                </NavLink>
            </li>
            <li>
                <NavLink
                    activeClassName="nav__dropdown__active-link"
                    className="nav__links"
                    to="/cotizaciones/ethereum"
                >
                    Ethereum
                </NavLink>
            </li>
            <li>
                <NavLink className="nav__links" to="/cotizaciones/reserve">
                    Reserve
                </NavLink>
            </li>
            <li>
                <NavLink
                    activeClassName="nav__dropdown__active-link"
                    className="nav__links"
                    to="/cotizaciones/rsr"
                >
                    RSR
                </NavLink>
            </li>
        </Dropdown>
    );
};

export default CotizationDropdown;

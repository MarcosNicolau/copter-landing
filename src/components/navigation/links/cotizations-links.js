import { NavLink } from "react-router-dom";
const CotizationsLinks = () => {
	return (
		<>
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
				<NavLink
					className="nav__links"
					to="/cotizaciones/reserve"
					activeClassName="nav__dropdown__active-link"
				>
					Reserve
				</NavLink>
			</li>
			<li>
				<NavLink
					className="nav__links"
					activeClassName="nav__dropdown__active-link"
					to="/cotizaciones/rsr"
				>
					RSR
				</NavLink>
			</li>
		</>
	);
};

export default CotizationsLinks;

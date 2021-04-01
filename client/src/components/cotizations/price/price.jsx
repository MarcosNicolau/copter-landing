import React from "react";
import { usePriceContext } from "./context";
import { useCryptoContext } from "../context";

const Price = () => {
	const {
		state: { name, initialLogo },
	} = useCryptoContext();
	const {
		state: {
			valoration: { rate, arrow, color },
			price: { ask, bid },
			pairs,
		},
		dispatch,
		priceActions,
	} = usePriceContext();

	const updateCurrency = (e) =>
		dispatch({ type: priceActions.SET_CURRENCY, payload: e.target.value });

	return (
		<section>
			<div className="price">
				<div className="price__background"></div>
				<div className="container flex-row-center price__container view-100">
					<img
						src={initialLogo}
						alt="crypto"
						className="price__crypto-logo"
						data-aos="fade-right"
					/>
					<div className="flex-column-center">
						<div className="price__title" data-aos="fade">
							<h2>Cotizacion {name}</h2>
							<h5>El valor de {name} en tiempo real</h5>
						</div>
						<div className="flex-row-center price__prices">
							<div>
								<h5>Compra</h5>
								<h1>${ask ? ask : "-"}</h1>
							</div>
							<div>
								<h5>Venta</h5>
								<h1>${bid ? bid : "-"}</h1>
							</div>
							<div>
								<h5>Valoracion</h5>
								<div className="flex-row-center">
									<h1 className={color}>{rate ? rate : "-"}</h1>
									{arrow && <img src={arrow} alt="valoration" />}
								</div>
							</div>
						</div>

						<h5>Moneda</h5>
						<select
							name="curreny"
							className="price__currency-selection"
							onChange={updateCurrency}
						>
							{pairs.map((pair, index) => (
								<option value={pair.currency} key={index}>
									{pair.name}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Price;

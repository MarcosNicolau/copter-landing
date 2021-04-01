import React, { createContext, useContext, useEffect, useReducer } from "react";
import priceReducer, { priceState, priceActions } from "./reducer";
import { useCryptoContext } from "../context";
import axios from "axios";

const PriceContext = createContext("");
const usePriceContext = () => useContext(PriceContext);

const PriceContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(priceReducer, priceState);
	const {
		state: { abbr },
	} = useCryptoContext();

	const getPriceData = async () => {
		const endpoint = `/get-price-data`;
		const res = await axios.post(endpoint, { cryptoPair: `${abbr}${state.currency}` });
		const data = res.data;
		dispatch({
			type: priceActions.SET_PRICE,
			payload: { ask: data.ask, bid: data.bid, priceChange: data.price_24h_change },
		});
	};

	//Gets the pricing everytime the currency changes and sets an interval.
	useEffect(() => {
		if (!abbr || !state.currency) return;
		getPriceData();
		if (window.priceInterval) window.clearInterval(window.priceInterval);
		window.priceInterval = window.setInterval(getPriceData, [10000]);
	}, [state.currency]);

	return (
		<PriceContext.Provider value={{ state, dispatch, priceActions, getPriceData }}>
			{children}
		</PriceContext.Provider>
	);
};

export default PriceContextProvider;
export { usePriceContext };

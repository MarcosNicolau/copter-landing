import React, { createContext, useContext, useEffect, useReducer } from "react";
import priceReducer, { priceState, priceActions } from "./price-reducer";

const PriceContext = createContext("");
const usePriceContext = () => useContext(PriceContext);

const PriceContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(priceReducer, priceState);
	const socket = new WebSocket("wss://exchange-data-service.cryptosrvc.com");

	//Gets the price of the crypto in the available pairs
	socket.onmessage = (event) => {
		const res = JSON.parse(event.data);

		//Filters the pair if it is not in the pairs array
		const pairs = res.payload.filter((crypto) => {
			const isCurrencyAvailable = state.pairs.find(
				(pair) => `${state.crypto}${pair.currency}` === crypto.pair
			);
			if (isCurrencyAvailable) return true;
			return false;
		});

		//Sets the data in each currency
		pairs.forEach((pair) => {
			const { ask, bid, price_24h_change } = pair;
			const setCryptoPair = (setter) =>
				dispatch({
					type: setter,
					payload: { ask, bid, priceChange: price_24h_change },
				});

			//Checks the crypto  pair and then sets it
			if (pair.pair.includes("ARS")) return setCryptoPair(priceActions.SET_ARS_PRICE);
			if (pair.pair.includes("USD")) return setCryptoPair(priceActions.SET_USD_PRICE);
			if (pair.pair.includes("BTC")) return setCryptoPair(priceActions.SET_BTC_PRICE);
		});
	};

	const setSocketConnection = () => {
		socket.onopen = () => {
			socket.send(
				JSON.stringify({
					type: "subscribe",
					destination: `/topic/COPTER/quotes-all`,
				})
			);
		};
	};

	useEffect(() => {
		return () => {
			socket.send(
				JSON.stringify({
					type: "unsubscribe",
					destination: `/topic/EXCHANGE/quotes-all`,
				})
			);
		};
	}, []);

	//Update the price everytime one price changes
	useEffect(() => {
		dispatch({ type: priceActions.SET_PRICE });
		dispatch({ type: priceActions.SET_VALORATION });
	}, [state.ARSPair, state.USDPair, state.BTCPair, state.pairs]);

	return (
		<PriceContext.Provider value={{ state, dispatch, priceActions, setSocketConnection }}>
			{children}
		</PriceContext.Provider>
	);
};

export default PriceContextProvider;
export { usePriceContext };

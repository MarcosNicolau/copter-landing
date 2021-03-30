import React, { useEffect } from "react";
import { usePriceContext } from "./price/price-context";
import Price from "./price/price.jsx";
import bitcoinInitial from "../../assets/coins/initial/bitcoin.svg";

const BitcoinCotization = () => {
	const { state, dispatch, priceActions, setSocketConnection } = usePriceContext();

	//Set crypto and its logo initial
	useEffect(() => {
		dispatch({ type: priceActions.SET_CRYPTO_NAME, payload: "Bitcoin" });
		dispatch({ type: priceActions.SET_CRYPTO, payload: "BTC" });
		dispatch({ type: priceActions.SET_CRYPTO_INITIAL, payload: bitcoinInitial });
		dispatch({ type: priceActions.SET_CURRENCY, payload: "ARS" });
		dispatch({
			type: priceActions.SET_PAIRS,
			payload: [
				{ currency: "ARS", name: "Pesos" },
				{ currency: "USD", name: "Dolares" },
			],
		});
	}, [dispatch, priceActions]);

	//Once the crypto is setted, we start the connection
	useEffect(() => {
		if (!state.crypto) return;
		setSocketConnection();
	}, [state.crypto]);

	return <Price />;
};

export default BitcoinCotization;

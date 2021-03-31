import React, { useEffect } from "react";
import { usePriceContext } from "./price/context";
import { useChartContext } from "./chart/context";
import { useCryptoExplanationContext } from "./crypto-explanation/context";
import Price from "./price/price.jsx";
import CryptoChart from "./chart/chart.jsx";
import Explanation from "./crypto-explanation/explanation";
import bitcoinInitial from "../../assets/cryptos/initial/bitcoin.svg";
import bitcoinLogo from "../../assets/cryptos/full/bitcoin.svg";
import bitcoinIllustration from "../../assets/illustrations/cotization/bitcoin.svg";
import StartOperate from "../shared/components/start-operate";

const BitcoinCotization = () => {
	const { state: priceState, dispatch, priceActions, setSocketConnection } = usePriceContext();
	const {
		state: chartState,
		dispatch: chartDispatch,
		chartActions,
		getChartData,
	} = useChartContext();
	const { dispatch: explanationDispatch, explanationActions } = useCryptoExplanationContext();

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
		if (!priceState.crypto) return;
		setSocketConnection();
	}, [priceState.crypto]);

	useEffect(() => {
		chartDispatch({
			type: chartActions.SET_CRYPTO,
			payload: { abbr: "BTC", name: "Bitcoin", logo: bitcoinLogo, color: "#fd9608" },
		});
		getChartData("BTC", chartState.date.timestamp);
	}, []);

	useEffect(() => {
		explanationDispatch({
			type: explanationActions.SET_INFO,
			payload: {
				illustration: bitcoinIllustration,
				name: "Bitcoin",
				explanation:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			},
		});
	}, []);

	return (
		<>
			<Price />
			<CryptoChart />
			<Explanation />
			<StartOperate />
		</>
	);
};

export default BitcoinCotization;

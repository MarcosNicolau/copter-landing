import React, { useEffect } from "react";
import { useCryptoContext } from "./context";
import { usePriceContext } from "./price/context";
import { useExplanationContext } from "./explanation/context";
import { useChartContext } from "./chart/context";
import Price from "./price/price.jsx";
import CryptoChart from "./chart/chart.jsx";
import Explanation from "./explanation/explanation.jsx";
import StartOperate from "../shared/components/start-operate";

const Cotization = ({ cryptoInfo, pricing, explanation, chart }) => {
	const { state: cryptoState, cryptoActions, dispatch: cryptoDispatch } = useCryptoContext();
	const { dispatch: priceDispatch, priceActions } = usePriceContext();
	const { dispatch: explanationDispatch, explanationActions } = useExplanationContext();
	const { state: chartState, getChartData } = useChartContext();
	const { pairs, currency } = pricing;
	const { name, abbr, initialLogo, logo, illustration, color } = cryptoInfo;

	//Set crypto and its pairs
	useEffect(() => {
		priceDispatch({ type: priceActions.SET_CURRENCY, payload: currency });
		priceDispatch({
			type: priceActions.SET_PAIRS,
			payload: pairs,
		});
	}, [priceDispatch, priceActions]);

	useEffect(() => {
		explanationDispatch({
			type: explanationActions.SET_INFO,
			payload: {
				explanation,
			},
		});
	}, []);

	useEffect(() => {
		if (!cryptoState.abbr || !chart) return;
		getChartData(`${new Date().getFullYear()}-01-01`, chartState.ranges.YEARLY);
	}, [cryptoState.abbr]);

	useEffect(() => {
		cryptoDispatch({
			type: cryptoActions.SET_CRYPTO,
			payload: {
				name,
				abbr,
				initialLogo,
				logo,
				illustration,
				color,
			},
		});
	}, []);

	return (
		<>
			<Price />
			{chart && <CryptoChart />}
			<Explanation />
			<StartOperate />
		</>
	);
};

export default Cotization;

import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import chartReducer, { chartActions, chartState } from "./reducer";

const ChartContext = createContext("");

const useChartContext = () => useContext(ChartContext);

const ChartContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(chartReducer, chartState);

	const getChartData = async (crypto, timestamp) => {
		const endpoint = `https://api.nomics.com/v1/currencies/sparkline?key=bf9f0c31c249c5c9e54460e195c82482&ids=${crypto}&start=${timestamp}T00%3A00%3A00Z`;
		const res = await axios.get(endpoint);
		const timestamps = res.data[0].timestamps.map((timestamp) =>
			new Date(timestamp).toDateString()
		);
		dispatch({
			type: chartActions.SET_DATA,
			payload: { prices: res.data[0].prices, timestamps },
		});
	};

	useEffect(() => {
		if (!state.crypto.abbr) return;
		getChartData(state.crypto.abbr, state.date.timestamp);
	}, [state.date.timestamp]);

	return (
		<ChartContext.Provider value={{ getChartData, state, dispatch, chartActions }}>
			{children}
		</ChartContext.Provider>
	);
};

export default ChartContextProvider;
export { useChartContext };

import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import chartReducer, { chartActions, chartState } from "./reducer";

const ChartContext = createContext("");

const useChartContext = () => useContext(ChartContext);

const ChartContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(chartReducer, chartState);

	const getChartData = async (crypto, timestamp) => {
		const endpoint = `/get-chart-data`;
		const res = await axios.post(endpoint, { crypto, timestamp });
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

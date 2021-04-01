import React from "react";
import { useChartContext } from "./context";

const ChangeDateBtn = ({ name, range }) => {
	const {
		state: { activeDate },
		dispatch,
		chartActions,
		getChartData,
	} = useChartContext();

	const updateChart = (e) =>
		dispatch({
			type: chartActions.SET_DATE,
			payload: { target: e.target, getChartData },
		});

	return (
		<button
			className={activeDate === range ? "chart__active-timestamp" : ""}
			onClick={updateChart}
			timestamp={range}
		>
			{name}
		</button>
	);
};

export default ChangeDateBtn;

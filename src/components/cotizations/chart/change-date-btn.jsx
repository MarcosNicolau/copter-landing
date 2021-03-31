import React from "react";
import { useChartContext } from "./context";

const ChangeDateBtn = ({ name, range }) => {
	const {
		state: {
			date: { active },
		},
		dispatch,
		chartActions,
	} = useChartContext();

	const updateChartDate = (e) => dispatch({ type: chartActions.SET_DATE, payload: e });
	return (
		<button
			className={active === range ? "chart__active-timestamp" : ""}
			onClick={updateChartDate}
			timestamp={range}
		>
			{name}
		</button>
	);
};

export default ChangeDateBtn;

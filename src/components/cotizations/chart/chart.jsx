import React, { useEffect, useRef } from "react";
import { useChartContext } from "./context";
import { useCryptoContext } from "../context";
import Chart from "react-apexcharts";
import chartConfig from "./chart-config";
import ChangeDateBtn from "./change-date-btn";

const CryptoChart = () => {
	const {
		state: {
			data: { prices },
			ranges,
		},
	} = useChartContext();

	const {
		state: { name, logo },
	} = useCryptoContext();
	//Using a ref and not an state becuase it causes a re-render and the chart bugs
	const datapoint = useRef();
	const chart = chartConfig(datapoint);

	//Set a default value for the datapoint
	useEffect(() => {
		(datapoint.current.innerText = prices.length ? `$ ${prices[prices.length - 1]}` : "-"),
			[prices, datapoint.currentt];
	});

	return (
		<section>
			<div className="container flex-column-center space">
				<h4 className="title chart__title">La cotizacion de {name} en un grafico</h4>
				<div className="chart text-neutral-200">
					<div className="flex-row align-center chart__legend">
						<img src={logo} alt="crypto-logo" />
						<h5>{name}</h5>
					</div>
					<div className="flex-column-center">
						<h5>Valoracion:</h5>
						<h4 ref={datapoint}></h4>
					</div>
					<div className="flex-row chart__timestamps">
						<ChangeDateBtn name="Anual" range={ranges.YEARLY} />
						<ChangeDateBtn name="Mensual" range={ranges.MONTHLY} />
						<ChangeDateBtn name="Semanal" range={ranges.WEEKLY} />
					</div>
					<Chart
						options={chart.options}
						series={chart.series}
						type="area"
						width="100%"
						height="100%"
					/>
				</div>
			</div>
		</section>
	);
};

export default CryptoChart;

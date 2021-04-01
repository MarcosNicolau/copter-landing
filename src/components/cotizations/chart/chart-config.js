import { useChartContext } from "./context";
import { useCryptoContext } from "../context";

const chartConfig = (datapoint) => {
	const {
		state: { name, color },
	} = useCryptoContext();
	const {
		state: {
			data: { prices, timestamps },
		},
	} = useChartContext();
	return {
		options: {
			chart: {
				id: "crypto",
				zoom: {
					enabled: false,
				},
				toolbar: {
					show: false,
					tools: {
						download: false,
					},
				},
				events: {
					mouseMove: (event, chartContext, config) => {
						if (config.dataPointIndex === -1) return;
						return (datapoint.current.innerText = `$ ${
							config.globals.series[0][config.dataPointIndex]
						}`);
					},
				},
				sparkline: {
					enabled: false,
				},
			},
			colors: [color || "#fff"],
			xaxis: {
				categories: timestamps || [],
				labels: {
					show: true,
					format: "dd/MM",
				},
			},
			yaxis: {
				labels: {
					formatter: (value) => {
						return "$" + value;
					},
				},
			},
			stroke: {
				lineCap: "butt",
				width: 1,
			},
			dataLabels: {
				enabled: false,
			},
			tooltip: {
				enabled: true,
			},
			markers: {
				size: 1,
				strokeColors: color,
				strokeWidth: 2,
				radius: 2,
				hover: {
					size: 7,
				},
			},
		},
		series: [
			{
				name: name,
				data: prices || [],
			},
		],
	};
};

export default chartConfig;

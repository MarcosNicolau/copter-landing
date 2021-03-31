import setDate from "./set-date";

const chartState = {
	data: {
		prices: [],
		timestamps: [],
	},
	crypto: {
		abbr: "",
		name: "",
		logo: "",
		color: "",
	},
	ranges: {
		WEEKLY: "weekly",
		MONTHLY: "monthly",
		YEARLY: "yearly",
	},
	date: {
		active: "yearly",
		timestamp: `${new Date().getFullYear()}-01-01`,
	},
};

const chartActions = {
	SET_CRYPTO: "set-crypto",
	SET_DATA: "set-data",
	SET_DATE: "set-date",
};

const chartReducer = (state, action) => {
	const payload = action.payload;
	switch (action.type) {
		case chartActions.SET_CRYPTO:
			return {
				...state,
				crypto: {
					abbr: payload.abbr,
					name: payload.name,
					logo: payload.logo,
					color: payload.color,
				},
			};
		case chartActions.SET_DATA:
			return { ...state, data: { prices: payload.prices, timestamps: payload.timestamps } };
		case chartActions.SET_DATE:
			return setDate(state, payload);
		default:
			return { ...state };
	}
};

export default chartReducer;
export { chartState, chartActions };

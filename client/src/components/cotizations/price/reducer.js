import positiveValoration from "../../../assets/miscellaneous/cotizations/positive-valoration.svg";
import negativeValoration from "../../../assets/miscellaneous/cotizations/negative-valoration.svg";

const priceState = {
	price: {
		ask: undefined,
		bid: undefined,
		priceChange: undefined,
	},
	valoration: {
		rate: undefined,
		arrow: undefined,
		color: undefined,
	},
	currency: undefined,
	pairs: [],
};

const priceActions = {
	SET_CURRENCY: "set-selected-currency",
	SET_PAIRS: "set-pairs",
	SET_PRICE: "set-price",
};

const priceReducer = (state, action) => {
	const payload = action.payload;
	switch (action.type) {
		case priceActions.SET_PRICE:
			return setPrice(state, payload);
		case priceActions.SET_PAIRS:
			return { ...state, pairs: payload };
		case priceActions.SET_CURRENCY:
			return { ...state, currency: payload };
		default:
			return state;
	}
};

//Sets the price for the selected currency
function setPrice(state, payload) {
	const valoration = setValoration(payload.ask, payload.priceChange);
	return {
		...state,
		price: {
			ask: payload.ask,
			bid: payload.bid,
		},
		valoration,
	};
}

//Calculates the valoration and if it is negative or not
function setValoration(ask, priceChange) {
	const valoration = ((priceChange * 100) / ask).toFixed(2);
	const rate = valoration > 0 ? `+${valoration}` : `${valoration}`;
	const arrow = valoration > 0 ? positiveValoration : negativeValoration;
	const color = valoration > 0 ? "text-warning-positive" : "text-warning-negative";
	return { rate, arrow, color };
}

export default priceReducer;
export { priceState, priceActions };

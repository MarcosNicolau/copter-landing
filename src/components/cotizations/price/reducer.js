import positiveValoration from "../../../assets/miscellaneous/cotizations/positive-valoration.svg";
import negativeValoration from "../../../assets/miscellaneous/cotizations/negative-valoration.svg";

const priceState = {
	cryptoName: undefined,
	crypto: undefined,
	cryptoInitialImg: undefined,
	ARSPair: {
		ask: undefined,
		bid: undefined,
		priceChange: undefined,
	},
	USDPair: {
		ask: undefined,
		bid: undefined,
		priceChange: undefined,
	},
	BTCPair: {
		ask: undefined,
		bid: undefined,
		priceChange: undefined,
	},
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
	SET_CRYPTO_NAME: "set-crypto-name",
	SET_CRYPTO: "set-crypto",
	SET_CRYPTO_INITIAL: "set-crypto-initial",
	SET_CURRENCY: "set-selected-currency",
	SET_PAIRS: "set-pairs",
	SET_PRICE: "set-price",
	SET_ARS_PRICE: "set-ars-price",
	SET_USD_PRICE: "set-usd-price",
	SET_BTC_PRICE: "set-btc-price",
	SET_VALORATION: "set-valoration",
};

const priceReducer = (state, action) => {
	switch (action.type) {
		case priceActions.SET_CRYPTO_NAME:
			return { ...state, cryptoName: action.payload };
		case priceActions.SET_CRYPTO:
			return { ...state, crypto: action.payload };
		case priceActions.SET_CRYPTO_INITIAL:
			return { ...state, cryptoInitialImg: action.payload };
		case priceActions.SET_PRICE:
			return setPrice(state);
		case priceActions.SET_ARS_PRICE:
			return setPairPrice(state, "ARSPair", action.payload);
		case priceActions.SET_USD_PRICE:
			return setPairPrice(state, "USDPair", action.payload);
		case priceActions.SET_BTC_PRICE:
			return setPairPrice(state, "BTCPair", action.payload);
		case priceActions.SET_CURRENCY:
			return { ...state, currency: action.payload };
		case priceActions.SET_PAIRS:
			return { ...state, pairs: action.payload };
		case priceActions.SET_VALORATION:
			return setValoration(state);
		default:
			return state;
	}
};

//Sets the price for the selected currency
function setPrice(state) {
	if (state.currency === "ARS")
		return {
			...state,
			price: {
				ask: state.ARSPair.ask,
				bid: state.ARSPair.bid,
				priceChange: state.ARSPair.priceChange,
			},
		};
	if (state.currency === "USD")
		return {
			...state,
			price: {
				ask: state.USDPair.ask,
				bid: state.USDPair.bid,
				priceChange: state.USDPair.priceChange,
			},
		};
	if (state.currency === "BTC")
		return {
			...state,
			price: {
				ask: state.BTCPair.ask,
				bid: state.BTCPair.bid,
				priceChange: state.BTCPair.priceChange,
			},
		};
}

function setPairPrice(state, currency, payload) {
	return {
		...state,
		[currency]: { ask: payload.ask, bid: payload.bid, priceChange: payload.priceChange },
	};
}

function setValoration(state) {
	if (!state.price.priceChange) return { ...state };
	const ask = state.price.ask;
	const priceChange = state.price.priceChange;
	const valoration = ((priceChange * 100) / ask).toFixed(2);
	const rate = valoration > 0 ? `+${valoration}` : `${valoration}`;
	const arrow = valoration > 0 ? positiveValoration : negativeValoration;
	const color = valoration > 0 ? "text-warning-positive" : "text-warning-negative";
	return { ...state, valoration: { rate: rate, arrow, color } };
}

export default priceReducer;
export { priceState, priceActions };

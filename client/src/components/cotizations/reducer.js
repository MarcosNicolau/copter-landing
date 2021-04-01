const cryptoState = {
	name: undefined,
	abbr: undefined,
	initialLogo: undefined,
	logo: undefined,
	illustration: undefined,
	color: undefined,
};

const cryptoActions = {
	SET_CRYPTO: "set-crypto",
};

const cryptoReducer = (state, action) => {
	const { name, abbr, initialLogo, logo, illustration, color } = action.payload;
	switch (action.type) {
		case cryptoActions.SET_CRYPTO:
			return { ...state, name, abbr, initialLogo, logo, illustration, color };
	}
};

export default cryptoReducer;
export { cryptoState, cryptoActions };

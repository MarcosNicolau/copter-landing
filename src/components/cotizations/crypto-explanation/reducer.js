const explanationState = {
	name: undefined,
	illustration: undefined,
	explanation: "",
};

const explanationActions = {
	SET_INFO: "set-crypto-info",
};

const explanationReducer = (state, action) => {
	const payload = action.payload;
	switch (action.type) {
		case explanationActions.SET_INFO:
			return {
				...state,
				name: payload.name,
				illustration: payload.illustration,
				explanation: payload.explanation,
			};
	}
};

export default explanationReducer;
export { explanationState, explanationActions };

import React, { createContext, useContext, useReducer } from "react";
import explanationReducer, { explanationActions, explanationState } from "./reducer";

const CryptoExplanationContext = createContext("");

const useCryptoExplanationContext = () => useContext(CryptoExplanationContext);

const CryptoExplanationContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(explanationReducer, explanationState);
	return (
		<CryptoExplanationContext.Provider value={{ state, dispatch, explanationActions }}>
			{children}
		</CryptoExplanationContext.Provider>
	);
};

export default CryptoExplanationContextProvider;
export { useCryptoExplanationContext };

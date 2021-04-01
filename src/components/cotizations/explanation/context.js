import React, { createContext, useContext, useReducer } from "react";
import explanationReducer, { explanationActions, explanationState } from "./reducer";

const ExplanationContext = createContext("");

const useExplanationContext = () => useContext(ExplanationContext);

const ExplanationContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(explanationReducer, explanationState);
	return (
		<ExplanationContext.Provider value={{ state, dispatch, explanationActions }}>
			{children}
		</ExplanationContext.Provider>
	);
};

export default ExplanationContextProvider;
export { useExplanationContext };

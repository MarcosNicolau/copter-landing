import React, { createContext, useReducer, useContext } from "react";
import cryptoReducer, { cryptoState, cryptoActions } from "./reducer";
import PriceContextProvider from "./price/context";
import ChartContextProvider from "./chart/context";
import ExplanationContextProvider from "./explanation/context";

const CryptoContext = createContext("");
const useCryptoContext = () => useContext(CryptoContext);

const CryptoContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cryptoReducer, cryptoState);
	return (
		<CryptoContext.Provider
			value={{
				state,
				dispatch,
				cryptoActions,
			}}
		>
			<PriceContextProvider>
				<ChartContextProvider>
					<ExplanationContextProvider>{children}</ExplanationContextProvider>
				</ChartContextProvider>
			</PriceContextProvider>
		</CryptoContext.Provider>
	);
};

export default CryptoContextProvider;
export { useCryptoContext };

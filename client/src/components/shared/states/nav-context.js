import React, { createContext, useContext, useReducer } from "react";
import navReducer, { navState, navActions } from "./nav-reducer";

const NavContext = createContext("");

const useNavContext = () => useContext(NavContext);

const NavContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(navReducer, navState);
	return (
		<NavContext.Provider value={{ state, dispatch, navActions }}>
			{children}
		</NavContext.Provider>
	);
};

export default NavContextProvider;

export { useNavContext };

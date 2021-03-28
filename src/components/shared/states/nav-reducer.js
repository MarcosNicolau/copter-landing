const navState = {
	linksColor: "text-neutral-1000",
	areImgsLight: true,
	loginColor: "button auth auth--light",
	registerColor: "button auth auth--light bg-neutral-1000 text-primary-100",
};

const navActions = {
	SET_BLUE_NAV: "set-blue-nav",
	SET_LIGHT_NAV: "set-light-nav",
};

const navReducer = (state, action) => {
	switch (action.type) {
		case navActions.SET_BLUE_NAV:
			return {
				linksColor: "text-primary-100",
				areImgsLight: false,
				loginColor: "button auth",
				registerColor: "auth button bg-primary-100 text-neutral-1000",
			};
		case navActions.SET_LIGHT_NAV:
			return {
				linksColor: "text-neutral-1000",
				areImgsLight: true,
				loginColor: "button auth auth--light",
				registerColor: "button auth auth--light bg-neutral-1000 text-primary-100",
			};
		default:
			return state;
	}
};

export default navReducer;
export { navState, navActions };

import logoBlue from "../../../assets/company/logo.svg";
import logoLight from "../../../assets/company/logo-light.svg";
import dropdownBlue from "../../../assets/miscellaneous/navigation/dropdown.svg";
import dropdownLight from "../../../assets/miscellaneous/navigation/dropdown-light.svg";
import fullLogoBlue from "../../../assets/company/full-logo.svg";
import fullLogoLight from "../../../assets/company/full-logo-light.svg";
import hamburguerBlue from "../../../assets/miscellaneous/navigation/hamburguer.svg";
import hamburguerLight from "../../../assets/miscellaneous/navigation/hamburguer-light.svg";

const navState = {
	linksColor: "text-neutral-1000",
	logo: logoLight,
	fullLogo: fullLogoLight,
	dropdown: dropdownLight,
	hamburguer: hamburguerLight,
	loginColor: "button auth",
	registerColor: "button auth auth--light",
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
				logo: logoBlue,
				fullLogo: fullLogoBlue,
				dropdown: dropdownBlue,
				hamburguer: hamburguerBlue,
				loginColor: "button auth",
				registerColor: "button auth auth--blue",
			};
		case navActions.SET_LIGHT_NAV:
			return {
				linksColor: "text-neutral-1000",
				logo: logoBlue,
				fullLogo: fullLogoBlue,
				dropdown: dropdownBlue,
				hamburguer: hamburguerBlue,
				loginColor: "button auth auth--light",
				registerColor: "button auth auth--light",
			};
		default:
			return state;
	}
};

export default navReducer;
export { navState, navActions };

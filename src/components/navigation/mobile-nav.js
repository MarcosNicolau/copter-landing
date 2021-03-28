import { useEffect, useState } from "react";
import { useNavContext } from "../shared/states/nav-context";
import MobileNavMenu from "./mobile-nav-menu";
import fullLogo from "../../assets/company/full-logo.svg";
import fullLogoLight from "../../assets/company/full-logo-light.svg";
import hamburguer from "../../assets/miscellaneous/navigation/hamburguer.svg";
import hamburguerLight from "../../assets/miscellaneous/navigation/hamburguer-light.svg";

const MobileNav = () => {
	const [isNavOpen, setNavOpen] = useState(false);
	const {
		state: { areImgsLight },
	} = useNavContext();
	const setNavState = () => setNavOpen((prev) => !prev);

	//Disable scroll on mobile-nav open
	useEffect(() => {
		if (isNavOpen) return (document.body.style.overflowY = "hidden");
		document.body.style.overflow = "";
	}, [isNavOpen]);

	return (
		<div className="mobile-nav-container" data-aos="fade-down" data-aos-duration="1200">
			<div className="flex-row-between mobile-nav">
				<img
					src={areImgsLight ? fullLogoLight : fullLogo}
					alt="logo"
					className="mobile-nav__logo"
				/>
				<img
					src={areImgsLight ? hamburguerLight : hamburguer}
					alt="open nav"
					onClick={setNavState}
					className="padding-100"
				/>
			</div>
			<MobileNavMenu setNavState={setNavState} isNavOpen={isNavOpen} />
		</div>
	);
};

export default MobileNav;

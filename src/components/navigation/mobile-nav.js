import { useEffect, useState } from "react";
import { useNavContext } from "../shared/states/nav-context";
import MobileNavMenu from "./mobile-nav-menu";

const MobileNav = () => {
	const [isNavOpen, setNavOpen] = useState(false);
	const {
		state: { fullLogo, hamburguer },
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
				<img src={fullLogo} alt="logo" className="mobile-nav__logo" />
				<img
					src={hamburguer}
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

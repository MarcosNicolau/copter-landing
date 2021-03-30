import React from "react";
import Nav from "./nav.jsx";
import MobileNav from "./mobile-nav.jsx";

const Navigation = () => {
	return (
		<div className="container" style={{ position: "relative", zIndex: "10" }}>
			<Nav />
			<MobileNav />
		</div>
	);
};

export default Navigation;

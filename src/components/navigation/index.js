import Nav from "./nav";
import MobileNav from "./mobile-nav";

const Navigation = () => {
	return (
		<div className="container" style={{ position: "relative", zIndex: "10" }}>
			<Nav />
			<MobileNav />
		</div>
	);
};

export default Navigation;

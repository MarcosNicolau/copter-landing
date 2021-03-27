import { useEffect, useState } from "react";
import abstractBackground from "../../assets/backgrounds/abstract-left.svg";
import { useNavContext } from "../shared/states/nav-context";

const Hero = () => {
	const [windowWidth, setWindowWidth] = useState(window.outerWidth);
	const { dispatch, navActions } = useNavContext();
	//This variable must be equal to the medium breakpoint in scss.
	const mediumScreens = 1000;

	const handleResize = (e) => setWindowWidth(e.target.outerWidth);

	//Window resize listener for changing the nav color
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	//Change nav color based on device
	useEffect(() => {
		if (windowWidth <= mediumScreens) return dispatch({ type: navActions.SET_LIGHT_NAV });
		return dispatch({ type: navActions.SET_LIGHT_BTNS });
	}, [windowWidth, navActions, dispatch]);

	return (
		<section>
			<div className="hero">
				<div className="hero__background"></div>
				<div className="hero__title">
					<h1 data-aos="fade-up" data-aos-delay="300">
						Sumate a la revolucion <span className="break">de las cryptos con</span>
						<span className="font-wght-700 break">Copter.</span>
					</h1>
					<h5 data-aos="fade-up" data-aos-delay="400" className="snippet hero__snippet">
						Compra y vende cryptos desde un exchange legal y seguro
					</h5>
					<div data-aos="fade-up" data-aos-delay="500">
						<a
							href="https://app.exchangecopter.com/signup"
							className="button cta cta-violet hero__cta"
						>
							Comenzar
						</a>
					</div>
				</div>
				<img
					data-aos="fade-up"
					data-aos-delay="300"
					src={abstractBackground}
					alt="abstract"
					className="abstract-bg-left hero__abstract-bg"
				/>
			</div>
		</section>
	);
};

export default Hero;

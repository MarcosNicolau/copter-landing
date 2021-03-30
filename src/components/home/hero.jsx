import React, { useEffect, useRef } from "react";
import heroIllustration from "../../assets/illustrations/home/hero.svg";
import fullLogoLight from "../../assets/company/full-logo-light.svg";
import drawCanvas from "./canvas";

const Hero = () => {
	const canvas = useRef();
	const canvasResize = (e) => {
		if (e.target.innerWidth <= 1000) return;
		drawCanvas(canvas.current, e.target.innerWidth);
	};
	useEffect(() => {
		drawCanvas(canvas.current, window.innerWidth);
		const canvasInterval = window.addEventListener("resize", canvasResize);
		return () => window.clearInterval(canvasInterval);
	}, [canvas.current]);

	return (
		<section>
			<div className="view-100 hero">
				<canvas ref={canvas}></canvas>
				<div className="container flex-row-between hero__container">
					<div className="hero__title">
						<h1 data-aos="fade-up" data-aos-delay="300">
							Sumate a la revolucion <span className="break">de las cryptos con</span>
							<img src={fullLogoLight} alt="copter logo" className="hero__logo" />
						</h1>
						<p
							data-aos="fade-up"
							data-aos-delay="400"
							className="hero__snippet text-secondary-300 font-wght-700"
						>
							Compra y vende cryptos desde un exchange legal y seguro
						</p>
						<div data-aos="fade-up" data-aos-delay="500">
							<a
								href="https://app.exchangecopter.com/signup"
								className="button cta cta--white hero__cta"
							>
								Comenzar
							</a>
						</div>
					</div>
					<img
						className="universe"
						src={heroIllustration}
						alt="our universe"
						data-aos="fade-left"
						data-aos-delay="400"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;

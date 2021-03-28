import heroIllustration from "../../assets/illustrations/home/hero.svg";

const Hero = () => {
	return (
		<section>
			<div className="view-100 hero">
				<div className="container flex-row-center hero__container">
					<div className="hero__title">
						<h1 data-aos="fade-up" data-aos-delay="300">
							Sumate a la revolucion <span className="break">de las cryptos con</span>
							<span className="font-wght-700 break">Copter.</span>
						</h1>
						<h5
							data-aos="fade-up"
							data-aos-delay="400"
							className="hero__snippet text-secondary-100 font-wght-700"
						>
							Compra y vende cryptos desde un exchange legal y seguro
						</h5>
						<div data-aos="fade-up" data-aos-delay="500">
							<a
								href="https://app.exchangecopter.com/signup"
								className="button cta cta-white hero__cta"
							>
								Comenzar
							</a>
						</div>
					</div>
					<img
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

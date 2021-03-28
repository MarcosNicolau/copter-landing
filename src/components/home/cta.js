import joinUsIllustration from "../../assets/illustrations/home/join-us.svg";
const CTA = () => {
	return (
		<section>
			<div className="full-width bg-primary-200">
				<div className="flex-row-center home-cta">
					<div className="container home-cta__text">
						<h2 className="font-wght-700 text-neutral-1000">
							Somos tu ruta para que tomes
							<span className="break">control de tus finanzas.</span>
						</h2>
						<div data-aos="fade-up">
							<a href="/" className="button cta cta-violet">
								Empezar ahora
							</a>
						</div>
					</div>
					<div className="home-cta__img-container" data-aos="fade-left">
						<img src={joinUsIllustration} alt="join-us" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;

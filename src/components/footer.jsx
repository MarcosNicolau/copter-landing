import React from "react";
import fullLogoLight from "../assets/company/full-logo-light.svg";
import facebook from "../assets/company/contact/facebook.svg";
import instagram from "../assets/company/contact/instagram.svg";
import linkedin from "../assets/company/contact/linkedin.svg";

const Footer = () => {
	return (
		<footer>
			<div className="bg-primary-100">
				<div className="container text-neutral-1000 flex-column footer">
					<div className="flex-row-between footer__top">
						<div className="flex-column-center">
							<img src={fullLogoLight} alt="copter logo" className="footer__logo" />
							<div className="flex-column footer__auth-btns">
								<a href="" className="button auth auth--light">
									Registrate
								</a>
								<a href="" className="button auth">
									Acceder
								</a>
							</div>
						</div>
						<div className="flex-row">
							<div className="flex-column footer__links">
								<h5>Cotizaciones</h5>
								<a href="">Bitcoin</a>
								<a href="">Ethereum</a>
								<a href="">Reserve</a>
								<a href="">Rsr</a>
							</div>
							<div className="flex-column footer__links">
								<h5>Empresa</h5>
								<a href="">Terminos y condiciones</a>
								<a href="">Privacidad</a>
								<a href="">Limites y condiciones</a>
							</div>
						</div>
					</div>
					<div className="footer__bottom">
						<div className="flex-column-center">
							<p className="text-neutral-1000 font-wght-600">
								support@exchangecopter.com
							</p>
							<div className="flex-row-center footer__contact">
								<a href="">
									<img src={facebook} alt="facebook contact" />
								</a>
								<a href="">
									<img src={instagram} alt="instagram contact" />
								</a>
								<a href="">
									<img src={linkedin} alt="linkedin contact" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

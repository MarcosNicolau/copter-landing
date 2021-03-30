import React from "react";
import SectionTitle from "../shared/components/section-title.jsx";
import Card from "../shared/components/card.jsx";
import AbstractBg from "../shared/components/abstract-bg.jsx";
import validationIcon from "../../assets/icons/home/security/validation.svg";
import simplicityIcon from "../../assets/icons/home/security/simplicity.svg";
import trustIcon from "../../assets/icons/home/security/trust.svg";

const Security = () => {
	return (
		<section>
			<div className="container security">
				<SectionTitle title="Nos aseguramos de tu seguridad">
					Contrary to popular belief, Lorem Ipsum is not simply random text. Just dummy
					text.
				</SectionTitle>
				<div className="flex-row-center security__cards">
					<Card type="card-2" title="Validacion" icon={validationIcon}>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has
						roots in a piece of classical.
					</Card>
					<Card type="card-2" title="Sencillez" icon={simplicityIcon}>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has
						roots in a piece of classical.
					</Card>
					<Card type="card-2" title="Transparencia" icon={trustIcon}>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has
						roots in a piece of classical.
					</Card>
				</div>
				<AbstractBg bottom="-8em" />
			</div>
		</section>
	);
};

export default Security;

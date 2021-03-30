import React from "react";
import featureIllustration from "../../assets/illustrations/home/features.svg";
import controlIcon from "../../assets/icons/home/features/control.svg";
import evaluationIcon from "../../assets/icons/home/features/evaluation.svg";
import protectionIcon from "../../assets/icons/home/features/protection.svg";
import calendarIcon from "../../assets/icons/home/features/calendar.svg";
import Card from "../shared/components/card.jsx";
import SectionTitle from "../shared/components/section-title.jsx";

const Features = () => {
	return (
		<section>
			<div className="view-100 container features">
				<SectionTitle title="Todo lo que necesitas para comenzar">
					Contrary to popular belief, Lorem Ipsum is not simply random text. Just dummy
					text.
				</SectionTitle>
				<div className="flex-row-between features__cards-container">
					<div className="flex-column-center features__cards">
						<Card title="Total control" icon={controlIcon} type="card-1">
							Contrary to popular belief, Lorem Ipsum is not simply random text. It
							has roots in a piece of classical Latin literature.
						</Card>
						<Card title="Evaluacion" icon={evaluationIcon} type="card-1">
							Contrary to popular belief, Lorem Ipsum is not simply random text. It
							has roots in a piece of classical Latin literature.
						</Card>
						<Card title="Proteccion" icon={protectionIcon} type="card-1">
							Contrary to popular belief, Lorem Ipsum is not simply random text. It
							has roots in a piece of classical Latin literature.
						</Card>
						<Card title="Disponible 24/7" icon={calendarIcon} type="card-1">
							Contrary to popular belief, Lorem Ipsum is not simply random text. It
							has roots in a piece of classical Latin literature.
						</Card>
					</div>
					<div className="features__illustration " data-aos="fade-left">
						<img src={featureIllustration} alt="features" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;

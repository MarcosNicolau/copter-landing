import featureIllustration from "../../assets/illustrations/home/features.svg";
import controlIcon from "../../assets/icons/home/control.svg";
import evaluationIcon from "../../assets/icons/home/evaluation.svg";
import protectionIcon from "../../assets/icons/home/protection.svg";
import calendarIcon from "../../assets/icons/home/calendar.svg";
import Card from "../shared/components/card";

const Features = () => {
	return (
		<section>
			<div className="features delimit-line">
				<div className="section-title">
					<h2 className="title">Todo lo que necesitas para comenzar</h2>
					<h5 className="snippet">
						Contrary to popular belief, Lorem Ipsum is not simply random text. Just
						dummy text.
					</h5>
				</div>

				<div className="flex-row-between">
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
					<div className="features__illustration" data-aos="fade-left">
						<img src={featureIllustration} alt="features" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;

import SectionTitle from "./section-title";
import budgetIcon from "../../../assets/icons/budget.svg";
import buyCryptosIcon from "../../../assets/icons/buy-cryptos.svg";
import valuationsIcon from "../../../assets/icons/valuations.svg";
import AbstractBg from "./abstract-bg";

const StartOperate = () => {
	return (
		<section>
			<div className="view-75 start-operate">
				<SectionTitle title="Comenzar a operar nunca fue tan facil">
					Contrary to popular belief, Lorem Ipsum is not simply random text. Just dummy
					text.
				</SectionTitle>
				<div className="flex-row-center start-operate__steps">
					<Step desc="Deposita pesos" icon={budgetIcon} />
					<div
						className="start-operate__line"
						data-aos="fade-left"
						data-aos-delay="100"
					></div>
					<Step desc="Compra crypto" icon={buyCryptosIcon} delay="100" />
					<div
						className="start-operate__line"
						data-aos="fade-left"
						data-aos-delay="300"
					></div>
					<Step desc="Compra crypto" icon={valuationsIcon} delay="400" />
				</div>
			</div>

			<AbstractBg right="true" bottom="8rem" />
		</section>
	);
};

const Step = ({ desc, icon, delay }) => {
	return (
		<div
			className="start-operate__step flex-column-center"
			data-aos="fade-left"
			data-aos-delay={delay}
		>
			<div className="start-operate__step-img-container">
				<img src={icon} alt="deposita" />
			</div>
			<h4>{desc}</h4>
		</div>
	);
};

export default StartOperate;

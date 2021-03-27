import abstractBackgroundLeft from "../../../assets/backgrounds/abstract-left.svg";
import abstractBackgroundRight from "../../../assets/backgrounds/abstract-right.svg";
const AbstractBg = ({ bottom, right }) => {
	return (
		<div className="full-width">
			<img
				data-aos="fade-up"
				data-aos-delay="300"
				src={right ? abstractBackgroundRight : abstractBackgroundLeft}
				alt="abstract"
				className={`${right ? "abstract-bg-right" : "abstract-bg-left"}`}
				style={{
					bottom,
				}}
			/>
		</div>
	);
};

export default AbstractBg;

import abstractBackground from "../../../assets/backgrounds/abstract-left.svg";
const AbstractBg = ({ bottom }) => {
	return (
		<img
			data-aos="fade-up"
			data-aos-delay="300"
			src={abstractBackground}
			alt="abstract"
			className="abstract-bg-left"
			style={{
				bottom,
			}}
		/>
	);
};

export default AbstractBg;

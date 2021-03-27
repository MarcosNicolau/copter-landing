const Card = ({ title, icon, type, children }) => {
	return (
		<div className="card" id={type} data-aos="fade-up" data-aos-duration="800">
			<div className={`card__img-container`}>
				<img src={icon} alt="" />
			</div>
			<div>
				<h4>{title}</h4>
				<p>{children}</p>
			</div>
		</div>
	);
};

export default Card;

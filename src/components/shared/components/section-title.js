const SectionTitle = ({ title, children }) => {
	return (
		<div className="section-title">
			<h2 className="title">{title}</h2>
			<h5 className="snippet">{children}</h5>
		</div>
	);
};

export default SectionTitle;

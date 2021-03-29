const SectionTitle = ({ title, children }) => {
	return (
		<div className="section-title">
			<h2 className="title">{title}</h2>
			<p className="snippet">{children}</p>
		</div>
	);
};

export default SectionTitle;

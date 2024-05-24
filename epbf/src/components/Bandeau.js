const Bandeau = ({ pictureFile, titre }) => {
	return (
		<div className="bandeau">
			<img
				className="bandeau-img"
				src={pictureFile}
				alt={titre}
			/>
			<p className="bandeau-titre">{titre}</p>
		</div>
	);
};
export default Bandeau;

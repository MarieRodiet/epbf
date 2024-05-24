const Bandeau = ({ pictureFile, titre }) => {
	return (
		<div className="bandeau">
			<img
				className="bandeau-img"
				src={pictureFile}
				alt={titre}
			/>
			<h1 className="bandeau-titre">{titre}</h1>
		</div>
	);
};
export default Bandeau;

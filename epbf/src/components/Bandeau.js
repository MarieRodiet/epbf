const Bandeau = ({ pictureFile, titre }) => {
	return (
		<div className="bandeau">
			<img className="bandeau-img"
				src={pictureFile}
				alt={titre}
			/>
            <p>{titre}</p>
		</div>
	);
};
export default Bandeau;

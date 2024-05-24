import Bandeau from '../components/Bandeau';
import bandeauImg from '../assets/img/bandeau/jesuisnouveau.jpg';

const JeSuisNouveau = () => {
	const titre = 'Je suis nouveau';
	return (
		<div>
			<Bandeau
				pictureFile={bandeauImg}
				titre={titre}
			/>
		</div>
	);
};

export default JeSuisNouveau;

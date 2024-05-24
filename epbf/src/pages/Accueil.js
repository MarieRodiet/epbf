import Bandeau from '../components/Bandeau';
import bandeauImg from '../assets/img/bandeau/jesuisnouveau.jpg';

const Accueil = () => {
	const titre = 'Accueil';
	return (
		<div>
			<Bandeau
				pictureFile={bandeauImg}
				titre={titre}
			/>
		</div>
	);
};
export default Accueil;

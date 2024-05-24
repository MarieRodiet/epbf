import Bandeau from '../components/Bandeau';
import bandeauImg from '../assets/img/bandeau/jesuisnouveau.jpg';

const Accueil = () => {
	return (
		<div>
			<Bandeau
				pictureFile={bandeauImg}
				titre="Je suis Nouveau"
			/>
			<h1>Accueil</h1>
		</div>
	);
};
export default Accueil;

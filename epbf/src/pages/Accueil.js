import Bandeau from '../components/Bandeau';
import bandeauImg from '../assets/img/bandeau/jesuisnouveau.jpg';
import togetherImg from '../assets/img/together.png';
import { versetAccueil } from '../data/texte_accueil';
const Accueil = () => {
	const titre = 'Accueil';
	return (
		<div>
			<Bandeau
				pictureFile={bandeauImg}
				titre={titre}
			/>
			<p>{versetAccueil}</p>
			<h1>Notre vision</h1>
			<img
				src={togetherImg}
				alt="communauté"
			/>
		</div>
	);
};
export default Accueil;

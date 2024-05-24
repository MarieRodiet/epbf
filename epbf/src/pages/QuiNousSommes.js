import Bandeau from '../components/Bandeau';
import bandeauImg from '../assets/img/bandeau/noussommes.jpg';

const QuiNousSommes = () => {
	const titre = 'Nous sommes';
	return (
		<div>
			<Bandeau
				pictureFile={bandeauImg}
				titre={titre}
			/>
		</div>
	);
};

export default QuiNousSommes;

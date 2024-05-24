import Bandeau from '../components/Bandeau';
import bandeauImg from '../assets/img/bandeau/viedeglise.jpg';

const VieDeglise = () => {
	const titre = "Vie d'Eglise";
	return (
		<div>
			<Bandeau
				pictureFile={bandeauImg}
				titre={titre}
			/>
		</div>
	);
};
export default VieDeglise;

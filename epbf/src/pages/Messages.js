import Bandeau from '../components/Bandeau';
import bandeauImg from '../assets/img/bandeau/messages.jpg';

const Messages = () => {
	const titre = 'Messages';
	return (
		<div>
			<Bandeau
				pictureFile={bandeauImg}
				titre={titre}
			/>
		</div>
	);
};
export default Messages;

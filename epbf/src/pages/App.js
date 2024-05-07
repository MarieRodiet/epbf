import '../style/base/globals.scss';
import Nav from '../components/Nav';
import SermonPreview from '../components/SermonPreview';
import { HashRouter } from 'react-router-dom';

function App() {
	return (
		<div
			className="App"
			id="outer-container"
		>
			<div className="bg"></div>
			<div className="bg bg2"></div>
			<div className="bg bg3"></div>
			<div className="content"></div>

			<HashRouter>
				<Nav />
				<SermonPreview />
			</HashRouter>
		</div>
	);
}

export default App;

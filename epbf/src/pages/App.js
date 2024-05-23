import '../style/base/globals.scss';
import Nav from './../components/Nav';
import JeSuisNouveau from './JeSuisNouveau';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuiNousSommes from './QuiNousSommes';
import SermonPreview from './../components/SermonPreview';
import Accueil from './Accueil';

function App() {
	return (
		<div
			className="App"
			id="outer-container"
		>
			<BrowserRouter>
				<SermonPreview />
				<div className="bg"></div>
				<div className="bg bg2"></div>
				<div className="bg bg3"></div>
				<div className="content"></div>
				<Nav />
				<Routes>
					<Route
						path="/"
						element={<Accueil />}
					/>

					<Route
						path="/quinoussommes"
						element={<QuiNousSommes />}
					/>
					<Route
						path="/jesuisnouveau"
						element={<JeSuisNouveau />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

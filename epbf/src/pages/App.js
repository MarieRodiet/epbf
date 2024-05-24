import '../style/base/globals.scss';
import Nav from './../components/Nav';
import JeSuisNouveau from './JeSuisNouveau';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuiNousSommes from './QuiNousSommes';
import Accueil from './Accueil';
import VieDeglise from './VieDeglise';
import Messages from './Messages';

function App() {
	return (
		<div
			className="App"
			id="outer-container"
		>
			<BrowserRouter>
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
						path="/jesuisnouveau"
						element={<JeSuisNouveau />}
					/>
					<Route
						path="/quinoussommes"
						element={<QuiNousSommes />}
					/>

					<Route
						path="/viedeglise"
						element={<VieDeglise />}
					/>
					<Route
						path="/messages"
						element={<Messages />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

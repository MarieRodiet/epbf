import logo from '../assets/img/logo-v1.png';
export default function LogoBox() {
	return (
		<div className="nav-logobox">
			<img
				src={logo}
				alt="EPBF logo"
				className="nav-logobox-logo"
			/>
			<p className="nav-logobox-epbf">Eglise Protestante Baptiste de Faremoutiers</p>
		</div>
	);
}

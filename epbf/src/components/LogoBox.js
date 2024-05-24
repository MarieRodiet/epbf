import logo from '../assets/img/logo-v1.png';
export default function LogoBox() {
	return (
		<div className="nav-logobox">
			<a
				href="/"
				className="nav-logobox-link"
			>
				{' '}
				<img
					src={logo}
					alt="EPBF logo"
					className="nav-logobox-link-logo"
				/>
				<p className="nav-logobox-link-epbf">Eglise Protestante Baptiste de Faremoutiers</p>
			</a>
		</div>
	);
}

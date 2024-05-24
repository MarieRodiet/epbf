import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
import { links } from '../data/menu-links';
import LogoBox from './LogoBox';
import logo from '../assets/img/logo-v1.png';
export default function Nav() {
	const [isOpen, setOpen] = useState(false);

	const handleIsOpen = () => {
		setOpen(!isOpen);
	};
	const handleIsClosed = () => {
		setOpen(false);
	};

	const LinkOne = useRef < HTMLInputElement;
	const scrolLWithUseRef = () => {
		LinkOne.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
	};

	return (
		<div>
			<nav className="nav">
				<LogoBox />
				<ul className="nav-links">
					{links.map(({ url, name }, index) => {
						return (
							<Link
								smooth
								className="nav-links-link"
								to={url}
								onClick={scrolLWithUseRef}
								key={index}
							>
								{name}
							</Link>
						);
					})}
				</ul>
			</nav>
			<div className="burger-nav">
				<Menu
					onOpen={handleIsOpen}
					onClose={handleIsClosed}
					isOpen={isOpen}
				>
					<a href="/">
						<img
							src={logo}
							alt="EPBF logo"
							className="burger-nav-logo"
						/>
					</a>
					{links.map(({ url, name }, index) => {
						return (
							<Link
								onClick={handleIsClosed}
								smooth
								className="menu-item"
								to={url}
								key={index}
							>
								{name}
							</Link>
						);
					})}
				</Menu>
			</div>
		</div>
	);
}

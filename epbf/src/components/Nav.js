import { slide as Menu } from 'react-burger-menu';
import logo from '../assets/img/logo-v1.png';
import { HashLink } from 'react-router-hash-link';
import { useRef } from 'react';
import { useState } from 'react';
import { links } from '../data/menu-links';

export default function Nav() {
	const [isOpen, setOpen] = useState(false);

	const handleIsOpen = () => {
		setOpen(!isOpen);
	};
	const handleIsClosed = () => {
		setOpen(false);
	};

	const LinkOne = (useRef < HTMLInputElement) | (null > null);
	const scrolLWithUseRef = () => {
		LinkOne.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
	};

	return (
		<div>
			<nav className="nav">
				<img
					src={logo}
					alt="EPBF logo"
					className="nav-logo"
				/>
				<ul className="nav-links">
					{links.map(function (link) {
						return (
							<HashLink
								smooth
								className="nav-links-link"
								to={link.url}
								onClick={scrolLWithUseRef}
							>
								{link.name}
							</HashLink>
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
					{links.map(function (link) {
						return (
							<HashLink
								onClick={handleIsClosed}
								smooth
								className="menu-item"
								to={link.url}
							>
								{link.name}
							</HashLink>
						);
					})}
				</Menu>
			</div>
		</div>
	);
}

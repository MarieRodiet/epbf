import { slide as Menu } from 'react-burger-menu';
import logo from '../assets/img/logo-v1.png';
import { HashLink } from 'react-router-hash-link';
import { useRef } from 'react';
import { useState } from 'react';

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
					alt="logo"
					className="nav-logo"
				/>
				<ul className="nav-links">
					<HashLink
						smooth
						className="nav-links-link"
						to="#aboutme"
						onClick={scrolLWithUseRef}
					>
						A Propos
					</HashLink>
					<HashLink
						smooth
						className="nav-links-link"
						to="#projects"
						onClick={scrolLWithUseRef}
					>
						Projects
					</HashLink>
					<HashLink
						smooth
						className="nav-links-link"
						to="#contactme"
						onClick={scrolLWithUseRef}
					>
						Contact
					</HashLink>
				</ul>
			</nav>
			<div className="burger-nav">
				<Menu
					onOpen={handleIsOpen}
					onClose={handleIsClosed}
					isOpen={isOpen}
				>
					<HashLink
						onClick={handleIsClosed}
						smooth
						className="menu-item"
						to="#aboutme"
					>
						A Propos
					</HashLink>
					<HashLink
						onClick={handleIsClosed}
						smooth
						className="menu-item"
						to="#projects"
					>
						Projets
					</HashLink>
					<HashLink
						onClick={handleIsClosed}
						smooth
						className="menu-item"
						to="#contactme"
					>
						Contact
					</HashLink>
				</Menu>
			</div>
		</div>
	);
}

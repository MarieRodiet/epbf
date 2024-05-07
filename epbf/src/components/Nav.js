import { slide as Menu } from 'react-burger-menu';
import { HashLink } from 'react-router-hash-link';
import { useRef } from 'react';
import { useState } from 'react';
import { links } from '../data/menu-links';
import LogoBox from './LogoBox';

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
							<HashLink
								smooth
								className="nav-links-link"
								to={url}
								onClick={scrolLWithUseRef}
								key={index}
							>
								{name}
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
					{links.map(({ url, name }, index) => {
						return (
							<HashLink
								onClick={handleIsClosed}
								smooth
								className="menu-item"
								to={url}
								key={index}
							>
								{name}
							</HashLink>
						);
					})}
				</Menu>
			</div>
		</div>
	);
}

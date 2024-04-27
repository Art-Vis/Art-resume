import { useState } from 'react';
import './BurgerMenu.css';

export const BurgerMenu = () => {
	const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
	const [menuClass, setMenuClass] = useState('menu hidden');
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	const updateMenu = () => {
		if (!isMenuClicked) {
			setBurgerClass('burger-bar clicked');
			setMenuClass('menu visible');
		} else {
			setBurgerClass('burger-bar unclicked');
			setMenuClass('menu hidden');
		}
		setIsMenuClicked(!isMenuClicked);
	};

	return (
		<div className='burger'>
			<nav>
				<div className='burger-menu' onClick={updateMenu}>
					<div className={burgerClass}></div>
					<div className={burgerClass}></div>
					<div className={burgerClass}></div>
				</div>
			</nav>

			<div className={menuClass}>
				<ul className='list__items'>
					<li className='item'>
						<a href=''>Skills</a>
					</li>
					<li className='item'>
						<a href=''>Bio</a>
					</li>
					<li className='item'>
						<a href=''>Projects</a>
					</li>
					<li className='item'>
						<a href=''>Contacts</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

import { useState } from 'react';
import { Link } from 'react-router-dom';
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

	const closeMenu = () => {
		setBurgerClass('burger-bar unclicked');
		setMenuClass('menu hidden');
		setIsMenuClicked(false);
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
						<Link to={'/skills'} onClick={closeMenu}>
							Навыки
						</Link>
					</li>
					<li className='item'>
						<Link to={'/projects'} onClick={closeMenu}>
							Проекты
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

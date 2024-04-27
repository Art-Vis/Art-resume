import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import './Header.css';

export const Header = () => {
	return (
		<header className='header'>
			<div className='header__block'>
				<h1 className='header__block--title'>ART-Project</h1>
				<BurgerMenu />
			</div>
		</header>
	);
};

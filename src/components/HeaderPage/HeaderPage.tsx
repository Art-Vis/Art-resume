import { Link } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import './HeaderPage.css';

const HeaderPage = () => {
	return (
		<div className='header__block'>
			<Link to={'/'}>
				<h1 className='header__block--title'>ART-Project</h1>
			</Link>
			<BurgerMenu />
		</div>
	);
};

export default HeaderPage;

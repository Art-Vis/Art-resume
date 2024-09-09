import { Link } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import './HeaderPage.css';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../store/slices/menuSlices';

const HeaderPage = () => {
	const dispatch = useDispatch();

	const updateCloseMenu = () => {
		dispatch(closeMenu());
	};

	return (
		<div className='header__block'>
			<Link to={'/'} onClick={updateCloseMenu}>
				<h1 className='header__block--title'>ART-Project</h1>
			</Link>
			<BurgerMenu />
		</div>
	);
};

export default HeaderPage;

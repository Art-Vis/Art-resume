import { Link } from 'react-router-dom';
// import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import './HeaderPage.scss';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../store/slices/menuSlices';

const HeaderPage = () => {
	const dispatch = useDispatch();

	const updateCloseMenu = () => {
		dispatch(closeMenu());
	};

	return (
		<nav className='header__menu'>
			<ul className='header__menu-list'>
				<li className='header__menu-item'>
					<Link
						to={'/'}
						className='header__menu-link'
						onClick={updateCloseMenu}
					>
						Главная
					</Link>
				</li>
				<li className='header__menu-item'>
					<Link to={'/skills'} className='header__menu-link'>
						Навыки
					</Link>
				</li>
				<li className='header__menu-item'>
					<Link to={'/projects'} className='header__menu-link'>
						Проекты
					</Link>
				</li>
				<li className='header__menu-item'>
					<Link to={'/my-tests'} className='header__menu-link'>
						Тесты
					</Link>
				</li>
			</ul>
			{/* <BurgerMenu /> */}
		</nav>
	);
};

export default HeaderPage;

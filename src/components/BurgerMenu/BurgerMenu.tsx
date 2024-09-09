import { Link } from 'react-router-dom';
import './BurgerMenu.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { openMenu, closeMenu } from '../../store/slices/menuSlices';

export const BurgerMenu = () => {
	const burgerClass = useSelector((state: RootState) => state.menu.burgerClass);
	const menuClass = useSelector((state: RootState) => state.menu.menuClass);

	const dispatch = useDispatch();

	const updateOpenMenu = () => {
		dispatch(openMenu());
	};

	const updateCloseMenu = () => {
		dispatch(closeMenu());
	};

	return (
		<div className={'burger'}>
			<nav>
				<div className='burger-menu' onClick={updateOpenMenu}>
					<div className={burgerClass}></div>
					<div className={burgerClass}></div>
					<div className={burgerClass}></div>
				</div>
			</nav>

			<div className={menuClass}>
				<ul className='list__items'>
					<li className='item'>
						<Link to={'/'} onClick={updateCloseMenu}>
							Главная
						</Link>
					</li>
					<li className='item'>
						<Link to={'/skills'} onClick={updateCloseMenu}>
							Навыки
						</Link>
					</li>
					<li className='item'>
						<Link to={'/projects'} onClick={updateCloseMenu}>
							Проекты
						</Link>
					</li>
					<li className='item'>
						<Link to={'/my-tests'} onClick={updateCloseMenu}>
							Тесты
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

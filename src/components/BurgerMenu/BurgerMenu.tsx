import { Link } from 'react-router-dom';
import './BurgerMenu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu, toggleMenu } from '../../store/slices/menuSlices';
import { RootState } from '../../store/store';

export const BurgerMenu = () => {
	const dispatch = useDispatch();
	const isMenuOpen = useSelector((state: RootState) => state.burger.isMenuOpen);

	const handleToggleClick = () => {
		dispatch(toggleMenu()); // Переключение состояния меню
	};

	const handleMenuClick = () => {
		dispatch(closeMenu()); // Закрытие меню при клике на ссылку
	};

	return (
		<div className='burger'>
			<div
				className={`burger__wrapp ${isMenuOpen ? 'active' : ''}`}
				onClick={handleToggleClick}
			>
				<span className='burger__wrapp-bar'></span>
				<span className='burger__wrapp-bar'></span>
				<span className='burger__wrapp-bar'></span>
			</div>
			<nav className={`menu ${isMenuOpen ? 'active' : ''}`}>
				<ul className='menu__list'>
					<li className='menu__item'>
						<Link to={'/'} className='menu__link' onClick={handleMenuClick}>
							🚀 Главная
						</Link>
					</li>
					<li className='menu__item'>
						<Link
							to={'/skills'}
							className='menu__link'
							onClick={handleMenuClick}
						>
							✨ Навыки
						</Link>
					</li>
					<li className='menu__item'>
						<Link
							to={'/projects'}
							className='menu__link'
							onClick={handleMenuClick}
						>
							🌌 Проекты
						</Link>
					</li>
					<li className='menu__item'>
						<Link
							to={'/my-tests'}
							className='menu__link'
							onClick={handleMenuClick}
						>
							🪐 Тесты
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

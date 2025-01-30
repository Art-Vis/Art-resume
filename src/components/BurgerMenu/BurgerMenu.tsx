import { Link } from 'react-router-dom';
import './BurgerMenu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu, toggleMenu } from '@store/slices/menuSlices';
import { RootState } from '@store/store';
import { useAnimationButtonsBurger } from '@hooks/useAnimationButtons';
import { CgMenu } from 'react-icons/cg';
import { useRef } from 'react';
import { GrClose } from 'react-icons/gr';
import SwitchTheme from '../SwitchTheme/SwitchTheme';

export const BurgerMenu = () => {
	const dispatch = useDispatch();
	const isMenuOpen = useSelector((state: RootState) => state.burger.isMenuOpen);

	const handleToggleClick = () => {
		dispatch(toggleMenu());
	};

	const handleMenuClick = () => {
		dispatch(closeMenu());
	};

	// Используем массив рефов для элементов
	const menuRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);
	const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);

	// Инициализация анимации для кнопки бургера и меню
	useAnimationButtonsBurger(menuRef, buttonRef, menuItemsRef, isMenuOpen);

	return (
		<div className='burger'>
			<div
				ref={buttonRef}
				className='burger__wrapp'
				onClick={handleToggleClick}
			>
				{isMenuOpen ? <GrClose /> : <CgMenu />}
			</div>
			<nav ref={menuRef} className='menu'>
				<ul className='menu__list'>
					<li
						className='menu__item'
						ref={el => {
							if (el && !menuItemsRef.current.includes(el)) {
								menuItemsRef.current.push(el);
							}
						}}
					>
						<Link to='/' className='menu__link' onClick={handleMenuClick}>
							Главная
						</Link>
					</li>
					<li
						className='menu__item'
						ref={el => {
							if (el && !menuItemsRef.current.includes(el)) {
								menuItemsRef.current.push(el);
							}
						}}
					>
						<Link
							to='/my-tests'
							className='menu__link'
							onClick={handleMenuClick}
						>
							Тесты
						</Link>
					</li>
					<li
						role='presentation'
						className='menu__item menu__switch'
						ref={el => {
							if (el && !menuItemsRef.current.includes(el)) {
								menuItemsRef.current.push(el);
							}
						}}
					>
						<SwitchTheme />
					</li>
				</ul>
			</nav>
		</div>
	);
};

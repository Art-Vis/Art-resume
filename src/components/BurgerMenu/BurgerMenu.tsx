import { Link } from 'react-router-dom';
import './BurgerMenu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu, toggleMenu } from '@store/slices/menuSlices';
import { RootState } from '@store/store';
import { useAnimationButtonsBurger } from '@hooks/useAnimationButtons';
import { CgMenu } from 'react-icons/cg';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { GrClose } from 'react-icons/gr';
import SwitchTheme from '../SwitchTheme/SwitchTheme';

export const BurgerMenu = () => {
	const dispatch = useDispatch();
	const isMenuOpen = useSelector((state: RootState) => state.burger.isMenuOpen);

	const handleToggleClick = () => {
		dispatch(toggleMenu()); // Переключение состояния меню
	};

	const handleMenuClick = () => {
		dispatch(closeMenu()); // Закрытие меню при клике на ссылку
	};

	const menuRef = useRef(null);
	const buttonRef = useRef(null);
	const menuItemsRef = useRef([]);

	useGSAP(() => {
		gsap.to(buttonRef.current, {
			rotate: isMenuOpen ? 90 : 0,
			scale: 1,
			duration: 0.3,
			ease: 'power2.out',
		});

		gsap.to(menuRef.current, {
			y: isMenuOpen ? 0 : '-100%',
			opacity: isMenuOpen ? 1 : 0,
			duration: 0.2,
			ease: 'power3.out',
		});

		// Анимация появления элементов списка
		if (isMenuOpen) {
			gsap.fromTo(
				menuItemsRef.current,
				{ opacity: 0, y: -20 },
				{ opacity: 1, y: 0, stagger: 0.1, duration: 0.2, ease: 'power2.out' }
			);
		}
	}, [isMenuOpen]);

	useAnimationButtonsBurger();

	return (
		<div className='burger'>
			<div
				ref={buttonRef}
				className={`burger__wrapp `}
				onClick={handleToggleClick}
			>
				{isMenuOpen ? <GrClose /> : <CgMenu />}
			</div>
			<nav ref={menuRef} className={`menu`}>
				<ul className='menu__list'>
					<li className='menu__item'>
						<Link to={'/'} className='menu__link' onClick={handleMenuClick}>
							Главная
						</Link>
					</li>
					<li className='menu__item'>
						<Link
							to={'/my-tests'}
							className='menu__link'
							onClick={handleMenuClick}
						>
							Тесты
						</Link>
					</li>
					<li role='presentation' className='menu__item menu__switch'>
						<SwitchTheme />
					</li>
				</ul>
			</nav>
		</div>
	);
};

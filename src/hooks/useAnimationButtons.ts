import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animationSettings } from '../utils/animationSettings';
import { RefObject } from 'react';

export const useAnimationButtonsSwitch = () => {
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			'.switch',
			animationSettings.fadeInButtons.from,
			animationSettings.fadeInButtons.to
		);
	});
};

export const useAnimationButtonsBurger = (
	menuRef: RefObject<HTMLDivElement>,
	buttonRef: RefObject<HTMLDivElement>,
	menuItemsRef: React.MutableRefObject<(HTMLLIElement | null)[]>,
	isMenuOpen: boolean
) => {
	useGSAP(() => {
		gsap.fromTo(
			buttonRef.current,
			{ rotate: isMenuOpen ? 0 : 90, opacity: 0 },
			{
				rotate: isMenuOpen ? 90 : 0,
				opacity: 1,
				duration: 0.05,
				ease: 'power1.out',
			}
		);

		gsap.from(menuRef.current, {
			y: isMenuOpen ? 0 : '-100%',
			opacity: isMenuOpen ? 1 : 0,
			duration: 0.2,
			ease: 'power3.out',
		});

		// Анимация появления элементов списка
		if (isMenuOpen) {
			gsap.fromTo(
				menuItemsRef.current.filter(el => el !== null), // исключаем null элементы
				{ opacity: 0, y: -20 }, // Начальные значения
				{
					opacity: 1,
					y: 0,
					stagger: 0.1,
					duration: 0.5,
					ease: 'power2.out',
				}
			);
		} else {
			// Если меню закрыто, элементам можно задать начальные значения
			gsap.to(
				menuItemsRef.current.filter(el => el !== null),
				{
					opacity: 0,
					y: -20,
					duration: 0.2,
					ease: 'power2.out',
				}
			);
		}
	}, [isMenuOpen]);
};

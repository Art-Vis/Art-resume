import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { animationSettings } from '../utils/animationSettings';

export const useAnimationProfile = () => {
	gsap.registerPlugin(useGSAP, ScrollTrigger);

	useGSAP(() => {
		const elements = [
			{
				selector: '.biography__title',
				settings: animationSettings.fadeInTitle,
			},
			{
				selector: '.biography__list-item',
				settings: animationSettings.fadeInProfileInfo,
			},
			{
				selector: '.experience__title',
				settings: animationSettings.fadeInTitle,
			},
			{
				selector: '.experience__list-item',
				settings: animationSettings.fadeInProfileInfo,
			},
			{
				selector: '.certificates__title',
				settings: animationSettings.fadeInTitle,
			},
			{ selector: '.swiper-slide', settings: animationSettings.fadeInItem },
			{
				selector: '.certificates',
				settings: animationSettings.fadeInItem,
			},
			{ selector: '.skills__title', settings: animationSettings.fadeInTitle },
			{
				selector: '.skills__list-card',
				settings: animationSettings.fadeInItem,
			},
			{
				selector: '.projects__title',
				settings: animationSettings.fadeInTitle,
			},
			{
				selector: '.projects__list-card',
				settings: animationSettings.fadeInItem,
			},
		];

		elements.forEach(({ selector, settings }) => {
			gsap.fromTo(selector, settings.from, {
				...settings.to,
				scrollTrigger: {
					trigger: selector,
					start: 'top 80%', // Начало анимации, когда элемент появляется в 80% окна
					end: 'top 40%', // Завершение анимации
					toggleActions: 'play none none reverse', // Воспроизведение и отмена при скролле вверх
				},
			});
		});
	});
};

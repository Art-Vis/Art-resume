import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animationSettings } from '../utils/animationSettings';

export const useAnimationMyTest = () => {
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			'.tests__title',
			animationSettings.fadeInTitle.from,
			animationSettings.fadeInTitle.to
		).fromTo(
			'.tests__card',
			animationSettings.fadeInItem.from,
			animationSettings.fadeInItem.to
		);
	});
};

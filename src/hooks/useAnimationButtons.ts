import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animationSettings } from '../utils/animationSettings';

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

export const useAnimationButtonsBurger = () => {
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			'.burger',
			animationSettings.fadeInButtons.from,
			animationSettings.fadeInButtons.to
		);
	});
};

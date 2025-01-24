import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animationSettings } from '../utils/animationSettings';

export const useAnimationSkills = () => {
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			'.skills__title',
			animationSettings.fadeInTitle.from,
			animationSettings.fadeInTitle.to
		).fromTo(
			'.skills__list-card',
			animationSettings.fadeInItem.from,
			animationSettings.fadeInItem.to
		);
	});
};

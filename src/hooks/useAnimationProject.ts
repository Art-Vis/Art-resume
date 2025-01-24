import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animationSettings } from '../utils/animationSettings';

export const useAnimationProject = () => {
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			'.projects__title',
			animationSettings.fadeInTitle.from,
			animationSettings.fadeInTitle.to
		).fromTo(
			'.projects__list-card',
			animationSettings.fadeInItem.from,
			animationSettings.fadeInItem.to
		);
	});
};

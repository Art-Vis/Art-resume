import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animationSettings } from '../utils/animationSettings';

export const useAnimationHeader = (onAnimationComplete?: () => void) => {
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		const tl = gsap.timeline({
			onComplete: () => {
				if (onAnimationComplete) onAnimationComplete();
			},
		});

		tl.fromTo(
			'.header__nav-item',
			animationSettings.fadeInNavItem.from,
			animationSettings.fadeInNavItem.to
		);
	});
};

import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animationSettings } from '../utils/animationSettings';

export const useAnimationLogo = (
	onComplete?: () => void
): { isVisible: boolean } => {
	const [isVisible, setIsVisible] = useState(true);

	useGSAP(() => {
		const tl = gsap.timeline({
			onComplete: () => {
				if (onComplete) onComplete();
				setIsVisible(false);
			},
		});

		tl.fromTo(
			'.right',
			animationSettings.slideLogoRight.from,
			animationSettings.slideLogoRight.to
		)
			.fromTo(
				'.left',
				animationSettings.slideLogoLeft.from,
				animationSettings.slideLogoLeft.to
			)
			.fromTo(
				'.logo-animation',
				animationSettings.pulseLogo.from,
				animationSettings.pulseLogo.to
			)
			.to('.logo-animation', animationSettings.finallyPositionLogo)
			.to('.left', { left: '-135px', opacity: 0 })
			.to('.right', { right: '-135px', opacity: 0 });
	});

	return { isVisible };
};

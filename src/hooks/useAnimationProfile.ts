import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animationSettings } from '../utils/animationSettings';

export const useAnimationProfile = () => {
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			'.profile__card',
			animationSettings.fadeInProfileCard.from,
			animationSettings.fadeInProfileCard.to
		).fromTo(
			'.profile__biography-item',
			animationSettings.fadeInProfileInfo.from,
			animationSettings.fadeInProfileInfo.to
		);
	});
};

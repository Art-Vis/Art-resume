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
		)
			.fromTo(
				'.biography__title',
				animationSettings.fadeInTitle.from,
				animationSettings.fadeInTitle.to
			)
			.fromTo(
				'.biography__list-item',
				animationSettings.fadeInProfileInfo.from,
				animationSettings.fadeInProfileInfo.to
			)
			.fromTo(
				'.certificates__title',
				animationSettings.fadeInTitle.from,
				animationSettings.fadeInTitle.to
			)
			.fromTo(
				'.certificates__item',
				animationSettings.fadeInItem.from,
				animationSettings.fadeInItem.to
			)
			.fromTo(
				'.skills__title',
				animationSettings.fadeInTitle.from,
				animationSettings.fadeInTitle.to
			)
			.fromTo(
				'.skills__list-card',
				animationSettings.fadeInItem.from,
				animationSettings.fadeInItem.to
			)
			.fromTo(
				'.projects__title',
				animationSettings.fadeInTitle.from,
				animationSettings.fadeInTitle.to
			)
			.fromTo(
				'.projects__list-card',
				animationSettings.fadeInItem.from,
				animationSettings.fadeInItem.to
			);
	});
};

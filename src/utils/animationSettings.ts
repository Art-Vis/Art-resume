export const animationSettings = {
	fadeInTitle: {
		from: { opacity: 0 },
		to: { opacity: 1, duration: 0.5, ease: 'power1.inOut' },
	},
	fadeInItem: {
		from: { opacity: 0 },
		to: { opacity: 1, duration: 0.7, stagger: 0.2, ease: 'power1.inOut' },
	},
	fadeInButtons: {
		from: { opacity: 0 },
		to: { opacity: 1, duration: 1.5, ease: 'power1.inOut' },
	},
	fadeInNavItem: {
		from: { opacity: 0 },
		to: { opacity: 1, duration: 1, stagger: 0.1, ease: 'power1.inOut' },
	},
	fadeInProfileCard: {
		from: { opacity: 0 },
		to: { opacity: 1, duration: 1, ease: 'power1.inOut' },
	},
	fadeInProfileInfo: {
		from: { opacity: 0 },
		to: { opacity: 0.5, duration: 1, stagger: 0.2, ease: 'power1.inOut' },
	},
	slideLogoRight: {
		from: { right: '-135px', opacity: 0 },
		to: { right: '49.4%', opacity: 1, duration: 1.5, ease: 'power1.inOut' },
	},
	slideLogoLeft: {
		from: { left: '-135px', opacity: 0 },
		to: { left: '49.4%', opacity: 1, duration: 1.5, ease: 'power1.inOut' },
	},
	pulseLogo: {
		from: { opacity: 0.8, duration: 0.7, scale: 0.8 },
		to: { opacity: 1, duration: 0.7, scale: 1.2 },
	},
	finallyPositionLogo: { opacity: 1, duration: 0.5, scale: 1 },
	logoSlideOutLeft: { left: '-135px', opacity: 0 },
	logoSlideOutRight: { right: '-135px', opacity: 0 },
};

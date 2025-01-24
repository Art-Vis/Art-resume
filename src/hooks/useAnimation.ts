import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const useAnimation = (
	elements: string[],
	animations: Record<string, { from?: any; to: any }>
) => {
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		const tl = gsap.timeline();
		elements.forEach(element => {
			const animation = animations[element];
			if (animation) {
				if (animation.from) {
					tl.fromTo(`.${element}`, animation.from, animation.to);
				} else {
					tl.to(`.${element}`, animation.to);
				}
			}
		});
	});
};

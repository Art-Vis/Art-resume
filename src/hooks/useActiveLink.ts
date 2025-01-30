import { useEffect, useState } from 'react';

export const useActiveLink = () => {
	const [activeLink, setActiveLink] = useState<string>('');

	useEffect(() => {
		const sections = document.querySelectorAll('section');

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setActiveLink(`#${entry.target.id}`);
					}
				});
			},
			{ threshold: 0.3, rootMargin: '0px 0px -50% 0px' }
		);

		sections.forEach(section => observer.observe(section));

		return () => {
			observer.disconnect();
		};
	}, []);

	return activeLink;
};

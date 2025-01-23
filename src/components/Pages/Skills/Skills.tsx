import './Skills.scss';
import { USER } from '../../../data/user';
import { FC } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Skills: FC = () => {
	const skills = USER.skills;

	gsap.registerPlugin(useGSAP);
	useGSAP(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			'.skills__title',
			{ opacity: 0 },
			{ opacity: 1, duration: 0.5, ease: 'power1.inOut' }
		).fromTo(
			'.skills__list-card',
			{ opacity: 0 },
			{ opacity: 1, duration: 0.7, stagger: 0.3, ease: 'power1.inOut' }
		);
	});

	return (
		<div className='skills'>
			<h1 className='skills__title'>Навыки</h1>
			<ul className='skills__list'>
				{skills.map(({ title, info }, index) => (
					<li className='skills__list-card card' key={index}>
						<h3 className='skills__list-title title'>{title}</h3>
						<p className='skills__list-descr descr'>{info}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Skills;

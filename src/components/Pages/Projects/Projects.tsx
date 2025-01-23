import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { USER } from '../../../data/user';
import './Projects.scss';

const Projects = () => {
	const userProjects = USER.project;

	gsap.registerPlugin(useGSAP);
	useGSAP(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			'.projects__title',
			{ opacity: 0 },
			{ opacity: 1, duration: 0.5, ease: 'power1.inOut' }
		).fromTo(
			'.projects__list-card',
			{ opacity: 0 },
			{ opacity: 1, duration: 0.7, stagger: 0.2, ease: 'power1.inOut' }
		);
	});

	return (
		<div className='projects'>
			<h1 className='projects__title'>Проекты</h1>
			<ul className='projects__list'>
				{userProjects.map(({ link, title, description }, index) => (
					<li className='projects__list-card' key={index}>
						<h3>
							<a href={link}>{title}</a>
						</h3>
						<p>{description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Projects;

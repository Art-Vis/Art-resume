import { ProjectProps } from '@data/interface';
import { FC } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const ProjectCard: FC<{ project: ProjectProps }> = ({ project }) => {
	const { link, title, description, img, tech } = project;

	return (
		<li className='projects__list-card card'>
			<a
				className='projects__list-link link'
				href={link}
				target='_blank'
				rel='noopener noreferrer'
			>
				<img className='projects__list-img img' src={img} alt={title} />
				<div className='projects__wrap wrap'>
					<h3 className='projects__list-title title'>
						{title}
						<GoArrowUpRight />
					</h3>
					<p className='projects__wrap-descr descr'>{description}</p>
					<div className='projects__wrap-tech-list tech-list'>
						{tech.map((item, index) => (
							<span className='projects__wrap-tech tech' key={index}>
								{item}
							</span>
						))}
					</div>
				</div>
			</a>
		</li>
	);
};

export default ProjectCard;

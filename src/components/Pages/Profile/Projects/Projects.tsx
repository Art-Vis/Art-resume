import './Projects.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import { ProjectsProps } from '@data/interface';
import { FC } from 'react';

const Projects: FC<ProjectsProps> = ({ userProjects }) => {
	return (
		<section className='projects' id='projects'>
			<h2 className='projects__title'>Проекты</h2>
			<ul className='projects__list'>
				{userProjects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</ul>
		</section>
	);
};

export default Projects;

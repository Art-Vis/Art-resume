import { USER } from '../../../data/user';
import './Projects.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import { useAnimationProject } from '../../../hooks/useAnimationProject';

const Projects = () => {
	const userProjects = USER.project;

	useAnimationProject();

	return (
		<div className='projects'>
			<h1 className='projects__title'>Проекты</h1>
			<ul className='projects__list'>
				{userProjects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</ul>
		</div>
	);
};

export default Projects;

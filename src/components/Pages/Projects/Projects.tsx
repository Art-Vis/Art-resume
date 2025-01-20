import { USER } from '../../../data/user';
import './Projects.css';

const Projects = () => {
	const userProjects = USER.project;

	return (
		<div className='container'>
			<h1 className='title'>Проекты</h1>
			<ul className='list'>
				{userProjects.map(({ src, title, description }, index) => (
					<li className='list__item--project' key={index}>
						<iframe width={400} height={400} src={src} frameBorder='0'></iframe>
						<h3>
							<a href={src}>{title}</a>
						</h3>
						<p>{description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Projects;

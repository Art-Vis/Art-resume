import { USER } from '../../../data/user';
import './Projects.css';

export const Projects = () => {
	const userProjects = USER.project;

	return (
		<>
			<h1>Проекты</h1>
			<ul className='skills__list'>
				{userProjects.map(({ src, title, description }, index) => (
					<li className='skill__item project' key={index}>
						<iframe width={400} height={400} src={src} frameBorder='0'></iframe>
						<h3>
							<a href={src}>{title}</a>
						</h3>
						<p>{description}</p>
					</li>
				))}
			</ul>
		</>
	);
};

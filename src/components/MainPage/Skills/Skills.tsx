import './Skills.scss';
import { USER } from '../../../data/user';

const Skills = () => {
	const skills = USER.skills;
	return (
		<div className='container'>
			<h1 className='title'>Навыки</h1>
			<ul className='list'>
				{skills.map(({ title, info }, index) => (
					<li className='list__item--card' key={index}>
						<h3>{title}</h3>
						<p>{info}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Skills;

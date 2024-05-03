import './Skills.css';
import { USER } from '../../../data/user';

export const Skills = () => {
	const skills = USER.skills;
	return (
		<div className='skills__container'>
			<h1>Навыки</h1>
			<ul className='skills__list'>
				{skills.map(({ title, info }, index) => (
					<li className='skill__item card' key={index}>
						<h3>{title}</h3>
						<p>{info}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

import './Skills.scss';
import { USER } from '../../../data/user';
import { FC } from 'react';
import { useAnimationSkills } from '../../../hooks/useAnimationSkills';

const Skills: FC = () => {
	const skills = USER.skills;

	useAnimationSkills();

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

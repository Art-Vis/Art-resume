import './Skills.scss';
import { FC } from 'react';
import Skill from './Skill/Skill';
import { SkillsProps } from '@data/interface';

const Skills: FC<SkillsProps> = ({ userSkills }) => {
	return (
		<section className='skills' id='skills'>
			<h2 className='skills__title'>Навыки</h2>
			<ul className='skills__list'>
				{userSkills.map(({ id, title, info, icon: Icon }) => (
					<Skill key={id} title={title} info={info} icon={Icon} />
				))}
			</ul>
		</section>
	);
};

export default Skills;

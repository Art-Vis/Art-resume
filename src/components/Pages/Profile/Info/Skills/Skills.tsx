import './Skills.scss';
import { FC } from 'react';
import Skill from './Skill/Skill';
import { SkillProps } from '@data/interface';

interface SkillsComponentProps {
	userSkills: SkillProps[];
}

const Skills: FC<SkillsComponentProps> = ({ userSkills }) => {
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

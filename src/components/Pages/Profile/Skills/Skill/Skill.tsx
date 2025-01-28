import { FC } from 'react';
import { SkillProps } from '@data/interface';

const Skill: FC<SkillProps> = ({ title, icon: Icon, info }) => {
	return (
		<li className='skills__list-card card'>
			<h3 className='skills__list-title title'>
				{title} <Icon />
			</h3>
			<p className='skills__list-descr descr'>{info}</p>
		</li>
	);
};
export default Skill;

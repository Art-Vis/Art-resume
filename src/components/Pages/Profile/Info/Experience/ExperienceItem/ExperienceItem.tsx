import { ExperienceProps } from '@data/interface';
import { FC } from 'react';

const ExperienceItem: FC<{ experience: ExperienceProps }> = ({
	experience,
}) => {
	return (
		<li className='experience__list-item'>
			<h3 className='experience__list-item-position'>{experience.position}</h3>
			<p className='experience__list-item-duration'>{experience.duration}</p>
			<ul className='experience__tasks'>
				{experience.responsibilities.map((task, i) => (
					<li key={i} className='experience__task'>
						<p>{task}</p>
					</li>
				))}
			</ul>
		</li>
	);
};
export default ExperienceItem;

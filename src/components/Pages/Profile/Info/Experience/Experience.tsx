import { ExperienceProps } from '@data/interface';
import { FC } from 'react';
import ExperienceItem from './ExperienceItem/ExperienceItem';
import './Experience.scss';

interface ExperienceComponentProps {
	userExperience: ExperienceProps[];
}

const Experience: FC<ExperienceComponentProps> = ({ userExperience }) => {
	return (
		<section className='experience' id='experience'>
			<h2 className='experience__title'>Опыт работы</h2>
			<ul className='experience__list'>
				{userExperience.map((exp, index) => (
					<ExperienceItem experience={exp} key={index} />
				))}
			</ul>
		</section>
	);
};

export default Experience;

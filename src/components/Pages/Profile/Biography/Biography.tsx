import { FC } from 'react';
import { BiographyArrayProps } from '@data/interface';
import './Biography.scss';
import BiographyList from './BiographyList/BiographyList';

const Biography: FC<BiographyArrayProps> = ({ userBiography }) => {
	return (
		<section className='biography' id='biography'>
			<h2 className='biography__title'>Обо мне</h2>
			<ul className='biography__list'>
				{userBiography.map((text, index) => (
					<BiographyList key={index} text={text} />
				))}
			</ul>
		</section>
	);
};
export default Biography;

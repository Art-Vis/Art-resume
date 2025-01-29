import { FC } from 'react';
import { BiographyListProps } from '@data/interface';

const BiographyList: FC<BiographyListProps> = ({ text }) => {
	return (
		<li className='biography__list-item'>
			<p className='biography__list-item-text'>{text}</p>
		</li>
	);
};

export default BiographyList;

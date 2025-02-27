import { FC } from 'react';

interface BiographyListProps {
	text: string;
}

const BiographyList: FC<BiographyListProps> = ({ text }) => {
	return (
		<li className='biography__list-item'>
			<p className='biography__list-item-text'>{text}</p>
		</li>
	);
};

export default BiographyList;

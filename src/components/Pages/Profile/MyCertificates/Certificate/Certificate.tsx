import { FC } from 'react';
import { CertificateProps } from '@data/interface';
import './Certificate.scss';

const Certificate: FC<CertificateProps> = ({ title, imgSrc }) => {
	return (
		<li className='certificates__item'>
			<img className='certificates__item-img' src={imgSrc} alt={title} />
		</li>
	);
};

export default Certificate;

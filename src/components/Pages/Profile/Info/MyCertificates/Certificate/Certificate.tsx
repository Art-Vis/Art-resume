import { FC } from 'react';
import { CertificateProps } from '@data/interface';
import './Certificate.scss';

const Certificate: FC<CertificateProps> = ({ title, imgSrc }) => {
	return (
		// <div className='certificates__item'>
		<img className='certificates__item-img' src={imgSrc} alt={title} />
		// </div>
	);
};

export default Certificate;

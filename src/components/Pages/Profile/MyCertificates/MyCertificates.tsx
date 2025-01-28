import { FC } from 'react';
import './MyCertificates.scss';
import Certificate from './Certificate/Certificate';
import { MyCertificatesProps } from '@data/interface';

const MyCertificates: FC<MyCertificatesProps> = ({ userCertificates }) => {
	return (
		<section className='certificates' id='certificates'>
			<h2 className='certificates__title'>Сертификаты</h2>
			<ul className='certificates__list'>
				{userCertificates.map(cert => (
					<Certificate
						key={cert.id}
						id={cert.id}
						title={cert.title}
						descr={cert.descr}
						imgSrc={cert.imgSrc}
					/>
				))}
			</ul>
		</section>
	);
};

export default MyCertificates;

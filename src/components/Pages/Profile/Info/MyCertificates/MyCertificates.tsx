import { FC, useEffect, useState } from 'react';
import './MyCertificates.scss';
import Certificate from './Certificate/Certificate';
import { CertificateProps } from '@data/interface';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

interface MyCertificatesProps {
	userCertificates: CertificateProps[];
}

const MyCertificates: FC<MyCertificatesProps> = ({ userCertificates }) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 850);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// return (
	// 	<section className='certificates' id='certificates'>
	// 		<h2 className='certificates__title'>Сертификаты</h2>
	// 		<ul className='certificates__list'>
	// 			<Swiper
	// 				effect={'cards'}
	// 				grabCursor={true}
	// 				modules={[EffectCards]}
	// 				className='mySwiper'
	// 			>
	// 				{userCertificates.map((cert, index) => (
	// 					<SwiperSlide key={index}>
	// 						<Certificate
	// 							id={cert.id}
	// 							title={cert.title}
	// 							imgSrc={cert.imgSrc}
	// 						/>
	// 					</SwiperSlide>
	// 				))}
	// 			</Swiper>
	// 		</ul>
	// 	</section>
	// );
	return (
		<section className='certificates' id='certificates'>
			<h2 className='certificates__title'>Сертификаты</h2>
			<ul className='certificates__list'>
				{isMobile ? (
					<Swiper
						effect={'cards'}
						grabCursor={true}
						modules={[EffectCards]}
						className='mySwiper'
					>
						{userCertificates.map((cert, index) => (
							<SwiperSlide key={index}>
								<Certificate
									id={cert.id}
									title={cert.title}
									imgSrc={cert.imgSrc}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				) : (
					userCertificates.map((cert, index) => (
						<Certificate
							key={index}
							id={cert.id}
							title={cert.title}
							imgSrc={cert.imgSrc}
						/>
					))
				)}
			</ul>
		</section>
	);
};

export default MyCertificates;

import { FC } from 'react';
import './MyCertificates.scss';
import Certificate from './Certificate/Certificate';
import { MyCertificatesProps } from '@data/interface';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const MyCertificates: FC<MyCertificatesProps> = ({ userCertificates }) => {
	return (
		<section className='certificates' id='certificates'>
			<h2 className='certificates__title'>Сертификаты</h2>
			<ul className='certificates__list'>
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
			</ul>
		</section>
	);
};

export default MyCertificates;

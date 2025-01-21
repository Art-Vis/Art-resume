import { FC, useState } from 'react';
import './LogoAnimation.scss';
import logoLeft from '../../assets/logo-left.png';
import logoRight from '../../assets/logo-right.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface LogoAnimationProps {
	onComplete?: () => void;
}

const LogoAnimation: FC<LogoAnimationProps> = ({ onComplete }) => {
	const [isVisible, setIsVisible] = useState(true);

	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		const tl = gsap.timeline({
			onComplete: () => {
				if (onComplete) onComplete();
				setIsVisible(false);
			},
		});
		tl.fromTo(
			'.right',
			{ right: '-135px', opacity: 0 },
			{ right: '49.4%', opacity: 1, duration: 1.5, ease: 'power1.inOut' }
		)
			.fromTo(
				'.left',
				{ left: '-135px', opacity: 0 },
				{ left: '49.4%', opacity: 1, duration: 1.5, ease: 'power1.inOut' }
			)
			.fromTo(
				'.logo-animation',
				{ opacity: 0.8, duration: 0.7, scale: 0.8 },
				{ opacity: 1, duration: 0.7, scale: 1.2 }
			)
			.to('.logo-animation', { opacity: 1, duration: 0.5, scale: 1 })
			.to('.left', { left: '-135px', opacity: 0 })
			.to('.right', { right: '-135px', opacity: 0 });
	});

	return (
		isVisible && (
			<div className='logo'>
				<div className='logo-animation'>
					<div className='logo-part left'>
						<img src={`${logoRight}`} alt='' />
					</div>
					<div className='logo-part right'>
						<img src={`${logoLeft}`} alt='' />
					</div>
				</div>
			</div>
		)
	);
};

export default LogoAnimation;

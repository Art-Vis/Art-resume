import { FC } from 'react';
import './LogoAnimation.scss';
import logoLeft from '../../assets/logo-left.png';
import logoRight from '../../assets/logo-right.png';
import { useAnimationLogo } from '../../hooks/useAnimationLogo';

interface LogoAnimationProps {
	onComplete?: () => void;
}

const LogoAnimation: FC<LogoAnimationProps> = ({ onComplete }) => {
	const { isVisible } = useAnimationLogo(onComplete);

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

import { FC, useEffect, useState } from 'react';
import './LogoAnimation.scss';
import logoLeft from '@images/logo-left.png';
import logoRight from '@images/logo-right.png';
import { useAnimationLogo } from '../../../hooks/useAnimationLogo';

interface LogoAnimationProps {
	onComplete?: () => void;
}

const LogoAnimation: FC<LogoAnimationProps> = ({ onComplete }) => {
	const { isVisible } = useAnimationLogo(onComplete);
	const [shouldRender, setShouldRender] = useState(true);

	useEffect(() => {
		if (!isVisible) {
			setTimeout(() => setShouldRender(false), 300); // Даём время перед удалением компонента
		}
	}, [isVisible]);

	if (!shouldRender) return null; // Удаляем компонент после анимации

	return (
		<div className='logo'>
			<div className='logo-animation'>
				<div className='logo-part left'>
					<img src={logoRight} alt='Right logo' />
				</div>
				<div className='logo-part right'>
					<img src={logoLeft} alt='Left logo' />
				</div>
			</div>
		</div>
	);
};

export default LogoAnimation;

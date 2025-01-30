import { FC, useEffect, useState } from 'react';
import './SwitchTheme.scss';
import { useAnimationButtonsSwitch } from '@hooks/useAnimationButtons';
import { BsMoonStars, BsSun } from 'react-icons/bs';

const SwitchTheme: FC = () => {
	const [isWhite, setIsWhite] = useState(false);

	useEffect(() => {
		if (isWhite) {
			document.body.classList.add('white');
		} else {
			document.body.classList.remove('white');
		}
	}, [isWhite]);

	useAnimationButtonsSwitch();

	return (
		<div className='switch switch-descktop switch-mobile'>
			<button className='icon moon'>
				<BsMoonStars />
			</button>
			<div className='toggle-wrapper'>
				<input
					type='checkbox'
					id='switch'
					onClick={() => setIsWhite(prev => !prev)}
				/>
				<label className='label' htmlFor='switch' id='toggle'></label>
			</div>
			<button className='icon sun'>
				<BsSun />
			</button>
		</div>
	);
};

export default SwitchTheme;

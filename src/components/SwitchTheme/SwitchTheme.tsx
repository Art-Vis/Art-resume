import { FC, useEffect, useState } from 'react';
import './SwitchTheme.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const SwitchTheme: FC = () => {
	const [isWhite, setIsWhite] = useState(false);

	useEffect(() => {
		if (isWhite) {
			document.body.classList.add('white');
		} else {
			document.body.classList.remove('white');
		}
	}, [isWhite]);

	gsap.registerPlugin(useGSAP);
	useGSAP(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			'.switch',
			{ opacity: 0 },
			{ opacity: 1, duration: 3, ease: 'power1.inOut' }
		);
	});

	return (
		<div className='switch'>
			<div className={`moon icon ${isWhite ? 'black' : ''}`}></div>
			<div className='toggle-wrapper'>
				<input
					type='checkbox'
					id='switch'
					onClick={() => setIsWhite(prev => !prev)}
				/>
				<label className='label' htmlFor='switch' id='toggle'></label>
			</div>
			<div className={`sun icon ${isWhite ? 'black' : ''}`}></div>
		</div>
	);
};

export default SwitchTheme;

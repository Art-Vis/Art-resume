import { useEffect, useState } from 'react';
import './SwitchTheme.scss';

const SwitchTheme = () => {
	const [isWhite, setIsWhite] = useState(false);

	useEffect(() => {
		if (isWhite) {
			document.body.classList.add('white');
		} else {
			document.body.classList.remove('white');
		}
	}, [isWhite]);

	return (
		<div className='switch'>
			<div className={`sun icon ${isWhite ? 'black' : ''}`}></div>
			<div className='toggle-wrapper'>
				<input
					type='checkbox'
					id='switch'
					onClick={() => setIsWhite(prev => !prev)}
				/>
				<label htmlFor='switch' id='toggle'></label>
			</div>
			<div className={`moon icon ${isWhite ? 'black' : ''}`}></div>
		</div>
	);
};

export default SwitchTheme;

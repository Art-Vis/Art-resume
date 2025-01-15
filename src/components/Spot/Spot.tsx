import { FC, useEffect, useState } from 'react';
import './Spot.scss';

const Spot = () => {
	const [spotPosition, setSpotPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event: MouseEvent) => {
		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;

		// Координаты пятна на основе положения курсора
		let x = event.clientX;
		let y = event.clientY;

		setSpotPosition({ x, y });
	};

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div className='spot-container'>
			<div
				className='spot'
				style={{
					left: `${spotPosition.x}px`,
					top: `${spotPosition.y}px`,
				}}
			></div>
		</div>
	);
};

export default Spot;

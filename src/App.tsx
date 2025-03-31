import './App.scss';
import { lazy, Suspense, useEffect, useState } from 'react';
import Spot from './components/ui/Spot/Spot';
import LogoAnimation from './components/ui/LogoAnimation/LogoAnimation';

const LazyHeader = lazy(() => import('./components/layout/Header/Header'));
const LazyMainInfo = lazy(() => import('./components/Pages/MainPage/MainPage'));

function App() {
	const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(
		() => localStorage.getItem('animationPlayed') === 'true'
	);
	const [isHeaderAnimationComplete, setIsHeaderAnimationComplete] =
		useState<boolean>(false);

	useEffect(() => {
		if (!isAnimationComplete) {
			localStorage.setItem('animationPlayed', 'true'); // Сохраняем в локальное хранилище
		}
	}, [isAnimationComplete]);

	return (
		<>
			<Spot />
			{!isAnimationComplete && (
				<LogoAnimation onComplete={() => setIsAnimationComplete(true)} />
			)}

			{isAnimationComplete && (
				<>
					<LazyHeader
						onAnimationComplete={() => setIsHeaderAnimationComplete(true)}
					/>
					{isHeaderAnimationComplete && (
						<Suspense fallback={<div className='spinner'></div>}>
							<LazyMainInfo />
						</Suspense>
					)}
				</>
			)}
		</>
	);
}

export default App;

import './App.scss';
import { lazy, Suspense, useEffect, useState } from 'react';
import Spot from './components/Spot/Spot';
import LogoAnimation from './components/LogoAnimation/LogoAnimation';

const LazyHeaderPage = lazy(() => import('./components/Header/Header'));
const LazyMainPage = lazy(() => import('./components/MainPage/MainPage'));

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
					<LazyHeaderPage
						onAnimationComplete={() => setIsHeaderAnimationComplete(true)}
					/>
					{isHeaderAnimationComplete && (
						<Suspense fallback={<div className='spinner'></div>}>
							<LazyMainPage />
						</Suspense>
					)}
				</>
			)}
		</>
	);
}

export default App;

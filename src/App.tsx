import './App.css';
import { lazy, Suspense, useState } from 'react';
import Spot from './components/Spot/Spot';
import LogoAnimation from './components/LogoAnimation/LogoAnimation';
const LazyHeaderPage = lazy(() => import('./components/HeaderPage/HeaderPage'));
const LazyMainPage = lazy(() => import('./components/MainPage/MainPage'));

function App() {
	const [isAnimationComplete, setIsAnimationComplete] =
		useState<boolean>(false);
	const [isHeaderAnimationComplete, setIsHeaderAnimationComplete] =
		useState<boolean>(false);

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

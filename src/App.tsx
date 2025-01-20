import './App.css';
import { Suspense, lazy } from 'react';
import Spot from './components/Spot/Spot';
import SwitchTheme from './components/SwitchTheme/SwitchTheme';
const LazyHeaderPage = lazy(() => import('./components/HeaderPage/HeaderPage'));
const LazyMainPage = lazy(() => import('./components/MainPage/MainPage'));

function App() {
	return (
		<>
			<Spot />
			<Suspense fallback={<div className='spinner'></div>}>
				<SwitchTheme />
				<LazyHeaderPage />
				<LazyMainPage />
			</Suspense>
		</>
	);
}

export default App;

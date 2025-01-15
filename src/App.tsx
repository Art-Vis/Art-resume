import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Spot from './components/Spot/Spot';
import SwitchTheme from './components/SwitchTheme/SwitchTheme';
const LazyHeaderPage = lazy(() => import('./components/HeaderPage/HeaderPage'));
const LazyMainPage = lazy(() => import('./components/MainPage/MainPage'));
const LazySkills = lazy(() => import('./components/MainPage/Skills/Skills'));
const LazyProject = lazy(
	() => import('./components/MainPage/Projects/Projects')
);
const LazyTests = lazy(() => import('./components/MainPage/MyTests/MyTest'));
const LazyFrontendTest = lazy(
	() => import('./components/MainPage/MyTests/FrontendTest/FrontendTest')
);

function App() {
	return (
		<>
			<Spot />
			<Suspense fallback={<div className='spinner'></div>}>
				<SwitchTheme />
				<header className='header'>
					<LazyHeaderPage />
				</header>
				<main className='main'>
					<Routes>
						<Route path='/' element={<LazyMainPage />} />
						<Route path='/skills' element={<LazySkills />} />
						<Route path='/projects' element={<LazyProject />} />
						<Route path='/my-tests' element={<LazyTests />} />
						<Route path='/frontend-test' element={<LazyFrontendTest />} />
					</Routes>
				</main>
			</Suspense>
		</>
	);
}

export default App;

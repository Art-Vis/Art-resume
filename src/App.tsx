import './App.css';
import { Star } from './components/Star/Star';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const LazyHeaderPage = lazy(() => import('./components/HeaderPage/HeaderPage'));
const LazyMainPage = lazy(() => import('./components/MainPage/MainPage'));
const LazySkills = lazy(() => import('./components/MainPage/Skills/Skills'));
const LazyProject = lazy(
	() => import('./components/MainPage/Projects/Projects')
);
const LazyFooterPage = lazy(() => import('./components/FooterPage/FooterPage'));

function App() {
	return (
		<BrowserRouter>
			<Star />
			<Suspense fallback={<div className='spinner'></div>}>
				<header className='header'>
					<LazyHeaderPage />
				</header>
				<main className='main'>
					<Routes>
						<Route path='/' element={<LazyMainPage />} />
						<Route path='/skills' element={<LazySkills />} />
						<Route path='/projects' element={<LazyProject />} />
					</Routes>
				</main>
				<footer className='footer'>
					<LazyFooterPage />
				</footer>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;

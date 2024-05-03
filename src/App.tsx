import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {
	HeaderPage,
	MainPage,
	FooterPage,
	Skills,
	Projects,
} from './components';
import { Star } from './components/Star/Star';
import { USER } from './data/user';

function App() {
	const user = USER;

	if (!user) {
		return <div className='spinner'></div>;
	}

	return (
		<BrowserRouter>
			<Star />

			<header className='header'>
				<HeaderPage />
			</header>

			<main className='main'>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/projects' element={<Projects />} />
				</Routes>
			</main>

			<footer className='footer'>
				<FooterPage />
			</footer>
		</BrowserRouter>
	);
}

export default App;

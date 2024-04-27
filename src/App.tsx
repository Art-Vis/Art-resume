import './App.css';
import { Header, MainPage, Footer } from './components';
import { Star } from './components/Star/Star';
import { USER } from './data/user';

function App() {
	const user = USER;

	if (!user) {
		return <div className='spinner'></div>;
	}

	return (
		<>
			<Star />
			<Header />
			<MainPage />
			<Footer />
		</>
	);
}

export default App;

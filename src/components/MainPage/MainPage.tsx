import { USER } from '../../data/user';
import Contacts from './Contacts/Contacts';
import './MainPage.scss';

const MainPage = () => {
	const user = USER;

	if (!user) {
		<div className='container'>
			<h1>no Info</h1>
		</div>;
	}

	return (
		<div className='container main-container'>
			<div className='card'>
				<img className='card__img' src={user.img} alt='user' />
				<h3 className='card__fullname'>{user.fullName}</h3>
				<p className='card__work'>{user.work}</p>
				<Contacts />
			</div>
			<div className='biography'>
				<p>{user.biography}</p>
			</div>
		</div>
	);
};

export default MainPage;

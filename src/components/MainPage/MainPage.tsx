import { USER } from '../../data/user';
import './MainPage.css';

const MainPage = () => {
	const user = USER;
	const userSkills = USER.skills;

	if (!user) {
		<main className='main'>
			<div className='container'>
				<h1>no Info</h1>
			</div>
		</main>;
	}

	return (
		<div className='container'>
			<div className='card'>
				<img className='round' src={user.img} alt='user' />
				<h3>{user.fullName}</h3>
				<h6>{user.city}</h6>
				<p>{user.work}</p>
				<div className='buttons'>
					<button className='primary'>Message</button>
					<button className='primary ghost'>Following</button>
				</div>
				<div className='skills'>
					<h6>Skills</h6>
					<ul>
						{userSkills.map(({ title }, index) => (
							<li key={index}>{title}</li>
						))}
					</ul>
				</div>
			</div>
			<div className='main__bio'>
				<p>{user.biography}</p>
			</div>
		</div>
	);
};

export default MainPage;

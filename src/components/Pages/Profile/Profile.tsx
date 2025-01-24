import { FC } from 'react';
import './Profile.scss';
import Contacts from './Contacts/Contacts';
import { USER } from '../../../data/user';
import img from '@assets/im.jpg';
import { useAnimationProfile } from '../../../hooks/useAnimationProfile';

const Profile: FC = () => {
	const user = USER;

	useAnimationProfile();

	return (
		<div className='profile'>
			<div className='profile__card'>
				<img className='profile__card-img' src={img} alt='user' />
				<h3 className='profile__card-fullname'>{user.fullName}</h3>
				<p className='profile__card-work'>{user.work}</p>
				<Contacts />
			</div>
			<div className='profile__biography'>
				{user.biography.map((item, index) => (
					<p className='profile__biography-item' key={index}>
						{item}
					</p>
				))}
			</div>
		</div>
	);
};

export default Profile;

import { FC } from 'react';
import './Profile.scss';
import { USER } from '@data/user';
import img from '@assets/im.jpg';
import { useAnimationProfile } from '../../../hooks/useAnimationProfile';
import ProfileCard from './ProfileCard/ProfileCard';
import Info from './Info/Info';

const Profile: FC = () => {
	const user = USER;
	useAnimationProfile();

	return (
		<section className='profile'>
			<ProfileCard
				profileCard={{ img, fullName: user.fullName, work: user.work }}
			/>
			<Info user={user} />
		</section>
	);
};

export default Profile;

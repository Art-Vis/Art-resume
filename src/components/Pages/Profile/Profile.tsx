import { FC } from 'react';
import './Profile.scss';
import Contacts from './Contacts/Contacts';
import { USER } from '../../../data/user';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Profile: FC = () => {
	const user = USER;

	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			'.card',
			{ opacity: 0 },
			{ opacity: 1, duration: 1, ease: 'power1.inOut' }
		).fromTo(
			'.biography__item',
			{ opacity: 0 },
			{ opacity: 0.5, duration: 1, stagger: 0.2, ease: 'power1.inOut' }
		);
	});

	return (
		<>
			<div className='card'>
				<img className='card__img' src={user.img} alt='user' />
				<h3 className='card__fullname'>{user.fullName}</h3>
				<p className='card__work'>{user.work}</p>
				<Contacts />
			</div>
			<div className='biography'>
				{user.biography.map((item, index) => (
					<p className='biography__item' key={index}>
						{item}
					</p>
				))}
			</div>
		</>
	);
};

export default Profile;

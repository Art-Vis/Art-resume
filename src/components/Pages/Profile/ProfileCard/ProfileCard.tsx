import { FC } from 'react';
import { useActiveLink } from '@hooks/useActiveLink';
import Contacts from './Contacts/Contacts';
import './ProfileCard.scss';
import { ProfileCardProps } from '@data/interface';

const ProfileCard: FC<{ profileCard: ProfileCardProps }> = ({
	profileCard,
}) => {
	const activeLink = useActiveLink();
	const { img, fullName, work } = profileCard;

	return (
		<div className='profile__card'>
			<img className='profile__card-img' src={img} alt='user' />
			<div className='profile__card-info'>
				<h1 className='profile__card-fullname'>{fullName}</h1>
				<p className='profile__card-work'>{work}</p>
				<div className='profile__link'>
					<a
						className={`profile__link-item ${
							activeLink === '#biography' ? 'profile__link-item-active' : ''
						}`}
						href='#biography'
					>
						<span></span>Обо мне
					</a>
					<a
						className={`profile__link-item ${
							activeLink === '#certificates' ? 'profile__link-item-active' : ''
						}`}
						href='#certificates'
					>
						<span></span>Сертификаты
					</a>
					<a
						className={`profile__link-item ${
							activeLink === '#skills' ? 'profile__link-item-active' : ''
						}`}
						href='#skills'
					>
						<span></span>Навыки
					</a>
					<a
						className={`profile__link-item ${
							activeLink === '#projects' ? 'profile__link-item-active' : ''
						}`}
						href='#projects'
					>
						<span></span>Проекты
					</a>
				</div>
				<Contacts />
			</div>
		</div>
	);
};

export default ProfileCard;

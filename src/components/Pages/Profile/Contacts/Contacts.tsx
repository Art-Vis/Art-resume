import './Contacts.scss';
import { FaGithub, FaTelegram, FaMailBulk, FaInstagram } from 'react-icons/fa';

const Contacts = () => {
	return (
		<div className='contacts'>
			<div className='contacts__links'>
				<a className='contacts__link' href='https://t.me/ArtVis9'>
					<FaTelegram />
				</a>
				<a
					className='contacts__link'
					href='https://www.instagram.com/artyom_vis'
				>
					<FaInstagram />
				</a>
				<a className='contacts__link' href='mailto:artyom0698@bk.ru'>
					<FaMailBulk />
				</a>
				<a className='contacts__link' href='https://github.com/Art-Vis'>
					<FaGithub />
				</a>
			</div>
		</div>
	);
};

export default Contacts;

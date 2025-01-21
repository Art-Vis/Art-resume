import './HeaderPage.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../store/slices/menuSlices';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SwitchTheme from '../SwitchTheme/SwitchTheme';
import { FC } from 'react';

interface HeaderPageProps {
	onAnimationComplete?: () => void;
}

const HeaderPage: FC<HeaderPageProps> = ({ onAnimationComplete }) => {
	const dispatch = useDispatch();

	const updateCloseMenu = () => {
		dispatch(closeMenu());
	};

	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		const tl = gsap.timeline({
			onComplete: () => {
				if (onAnimationComplete) onAnimationComplete();
			},
		});
		tl.fromTo(
			'.header__menu-item',
			{ opacity: 0 },
			{ opacity: 1, duration: 1, stagger: 0.1, ease: 'power1.inOut' }
		);
	});

	return (
		<header className='header'>
			<div className='container header-container'>
				<nav className='header__menu'>
					<ul className='header__menu-list'>
						<li className='header__menu-item'>
							<Link
								to={'/'}
								className='header__menu-link'
								onClick={updateCloseMenu}
							>
								Главная
							</Link>
						</li>
						<li className='header__menu-item'>
							<Link to={'/skills'} className='header__menu-link'>
								Навыки
							</Link>
						</li>
						<li className='header__menu-item'>
							<Link to={'/projects'} className='header__menu-link'>
								Проекты
							</Link>
						</li>
						<li className='header__menu-item'>
							<Link to={'/my-tests'} className='header__menu-link'>
								Тесты
							</Link>
						</li>
					</ul>
				</nav>
				<SwitchTheme />
			</div>
		</header>
	);
};

export default HeaderPage;

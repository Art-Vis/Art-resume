import './HeaderPage.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../store/slices/menuSlices';
import SwitchTheme from '../SwitchTheme/SwitchTheme';
import { FC } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useAnimationHeader } from '../../hooks/useAnimationHeader';

interface HeaderPageProps {
	onAnimationComplete?: () => void;
}

const HeaderPage: FC<HeaderPageProps> = ({ onAnimationComplete }) => {
	const dispatch = useDispatch();

	const updateCloseMenu = () => {
		dispatch(closeMenu());
	};

	useAnimationHeader(onAnimationComplete);

	return (
		<header className='header'>
			<div className='container header-container'>
				<nav className='header__nav'>
					<ul className='header__nav-list'>
						<li className='header__nav-item'>
							<Link
								to={'/'}
								className='header__nav-link'
								onClick={updateCloseMenu}
							>
								Главная
							</Link>
						</li>
						<li className='header__nav-item'>
							<Link to={'/my-tests'} className='header__nav-link'>
								Тесты
							</Link>
						</li>
					</ul>
					<BurgerMenu />
				</nav>
				<SwitchTheme />
			</div>
		</header>
	);
};

export default HeaderPage;

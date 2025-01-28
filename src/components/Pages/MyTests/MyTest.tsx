import { Link } from 'react-router-dom';
import './MyTest.scss';
import { useAnimationMyTest } from '@hooks/useAnimationMyTest';
import { FC } from 'react';

const MyTests: FC = () => {
	useAnimationMyTest();

	return (
		<div className='tests'>
			<h2 className='tests__title'>Выберите тест</h2>
			<div className='tests__cards'>
				<div className='tests__card frontend'>
					<Link className='tests__card-link' to={'/frontend-test'}></Link>
				</div>
				<div className='tests__card backend'>
					<Link className='tests__card-link' to={'/#'}></Link>
				</div>
				<div className='tests__card fullstack'>
					<Link className='tests__card-link' to={'/#'}></Link>
				</div>
			</div>
		</div>
	);
};

export default MyTests;

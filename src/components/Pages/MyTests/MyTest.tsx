import { Link } from 'react-router-dom';
import './MyTest.scss';
import { useAnimationMyTest } from '../../../hooks/useAnimationMyTest';

const MyTests = () => {
	useAnimationMyTest();

	return (
		<div className='tests'>
			<h1 className='tests__title'>Выберите тест</h1>
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

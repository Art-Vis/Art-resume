import { Link } from 'react-router-dom';
import './MyTest.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MyTests = () => {
	gsap.registerPlugin(useGSAP);
	useGSAP(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			'.tests__title',
			{ opacity: 0 },
			{ opacity: 1, duration: 0.5, ease: 'power1.inOut' }
		).fromTo(
			'.tests__card',
			{ opacity: 0 },
			{ opacity: 1, duration: 0.7, stagger: 0.3, ease: 'power1.inOut' }
		);
	});

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

import { FC } from 'react';
import AppRoutes from '../AppRoutes/AppRoutes';

const MainPage: FC = () => {
	return (
		<main className='main'>
			<div className='container main-container'>
				<AppRoutes />
			</div>
		</main>
	);
};

export default MainPage;

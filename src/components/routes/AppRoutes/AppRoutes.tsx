import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const LazyProfilePage = lazy(() => import('@pages/Profile/Profile'));
const LazyTests = lazy(() => import('@pages/MyTests/MyTest'));
const LazyFrontendTest = lazy(
	() => import('@pages/MyTests/FrontendTest/FrontendTest')
);

const AppRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<LazyProfilePage />} />
			<Route path='/my-tests' element={<LazyTests />} />
			<Route path='/frontend-test' element={<LazyFrontendTest />} />
		</Routes>
	);
};

export default AppRoutes;

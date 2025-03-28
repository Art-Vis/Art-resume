import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import AdminPanel from '../Pages/AdminPanel/AdminPanel';
const LazyProfilePage = lazy(() => import('@pages/Profile/Profile'));
const LazyTests = lazy(() => import('@pages/MyTests/MyTest'));
const LazyFrontendTest = lazy(
	() => import('@pages/MyTests/FrontendTest/FrontendTest')
);

const AppRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<LazyProfilePage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/admin' element={<AdminPanel />} />
			<Route path='/my-tests' element={<LazyTests />} />
			<Route path='/frontend-test' element={<LazyFrontendTest />} />
		</Routes>
	);
};

export default AppRoutes;

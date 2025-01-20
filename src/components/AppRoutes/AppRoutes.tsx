import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const LazyProfilePage = lazy(() => import('../Pages/Profile/Profile'));
const LazySkills = lazy(() => import('../Pages/Skills/Skills'));
const LazyProject = lazy(() => import('../Pages/Projects/Projects'));
const LazyTests = lazy(() => import('../Pages/MyTests/MyTest'));
const LazyFrontendTest = lazy(
	() => import('../Pages/MyTests/FrontendTest/FrontendTest')
);

const AppRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<LazyProfilePage />} />
			<Route path='/skills' element={<LazySkills />} />
			<Route path='/projects' element={<LazyProject />} />
			<Route path='/my-tests' element={<LazyTests />} />
			<Route path='/frontend-test' element={<LazyFrontendTest />} />
		</Routes>
	);
};

export default AppRoutes;

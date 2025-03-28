import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '@src/firebase';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate('/admin');
		} catch (err) {
			setError('Ошибка входа. Проверьте логин и пароль.');
		}
	};

	return (
		<div>
			<h2>Вход в админку</h2>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<form onSubmit={handleLogin}>
				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>
				<input
					type='password'
					placeholder='Пароль'
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<button type='submit'>Войти</button>
			</form>
		</div>
	);
};

export default Login;

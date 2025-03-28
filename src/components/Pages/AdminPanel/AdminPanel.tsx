import { useState, useEffect } from 'react';
import { auth } from '@src/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db } from '@src/firebase';
import { collection, addDoc } from 'firebase/firestore';

const AdminPanel = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState<any>(null);
	const [title, setTitle] = useState('');
	const [img, setImg] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(setUser);
		return () => unsubscribe();
	}, []);

	const handleLogout = async () => {
		try {
			await signOut(auth);
			navigate('/login');
		} catch (error) {
			console.error('Ошибка выхода', error);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await addDoc(collection(db, 'projects'), {
				title,
				img,
				description,
				createdAt: new Date(),
			});
			alert('Проект успешно добавлен!');
			setTitle('');
			setImg('');
			setDescription('');
		} catch (error) {
			console.error('Ошибка добавления проекта', error);
		}
	};

	if (!user) {
		navigate('/login');
		return null;
	}

	return (
		<div className='admin-panel'>
			<h1>Добро пожаловать в админ-панель</h1>
			<p>Вы авторизованы как {user.email}</p>
			<button onClick={handleLogout}>Выйти</button>

			<div>
				<h2>Добавить новый проект</h2>
				<form onSubmit={handleSubmit}>
					<label>
						Название проекта:
						<input
							type='text'
							value={title}
							onChange={e => setTitle(e.target.value)}
							required
						/>
					</label>
					<label>
						Описание:
						<textarea
							value={description}
							onChange={e => setDescription(e.target.value)}
							required
						/>
					</label>
					<button type='submit'>Добавить проект</button>
				</form>
			</div>
		</div>
	);
};

export default AdminPanel;

import { IUser } from './interfase';

export const USER: IUser = {
	id: 0,
	email: 'artyom0698@bk.ru',
	fullName: 'Артём Вишневецкий',
	city: 'Санкт-Петербург',
	work: 'Frontend developer',
	img: '/im.jpg',
	bio: 'Привет! Меня зовут Артём, и я фронтенд разработчик с фокусом на создании удивительных пользовательских интерфейсов. Мой опыт включает в себя работу с HTML, CSS, JavaScript, React. Я стремлюсь к тому, чтобы каждый проект, над которым я работаю, был не только функциональным, но и красивым. Готов внести свой вклад в ваш следующий проект и принести к нему свежие идеи и энергию!',
	skills: [
		{ title: 'HTML' },
		{ title: 'CSS' },
		{ title: 'Less' },
		{ title: 'Scss' },
		{ title: 'UI/UX' },
		{ title: 'JavaScript' },
		{ title: 'React' },
		{ title: 'Node' },
		{ title: 'Git' },
	],
	age: 25,
};

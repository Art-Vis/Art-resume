import { IUser } from './interface';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGit, FaCode } from 'react-icons/fa';
import pomodoro from '@assets/pomodoro1-n.png';
import converter from '@assets/converter1-n.png';
import scroll from '@assets/3d-scroll-n.png';
import calculator from '@assets/calculator1-n.png';
import certificateGreenApi from '@assets/greenApi.jpg';
import certificateReact from '@assets/React.png';
import certificateJs from '@assets/JS.jpg';
import certificateHtml from '@assets/html.jpg';
import certificateFrontend from '@assets/Front.jpg';
import { SiGreensock, SiJest, SiTypescript, SiWebpack } from 'react-icons/si';
import { TbApi, TbBrandVite } from 'react-icons/tb';

export const USER: IUser = {
	id: 0,
	email: 'artyom0698@bk.ru',
	fullName: 'Вишневецкий Артём',
	city: 'Санкт-Петербург',
	work: 'Frontend-разработчик',
	img: './src/assets/im.jpg',
	biography: [
		'Frontend-разработчик с 2-летним опытом работы в разработке. После окончания курсов в 2023, я начал свою карьеру в качестве frontend-разработчика. Быстро освоился в этой области благодаря своей заинтересованности к технологиям и творческому подходу к созданию пользовательских интерфейсов.',
		'За все время обучения прокачал свои знания в HTML, CSS, JavaScript и TypeScript а также приобрел опыт работы с различными фреймворками и библиотеками, такими как React и Vue. ',
		'Я активно слежу за новыми технологиями и тенденциями в области веб-разработки, участвую в профессиональных мероприятиях и конференциях, а также принимаю участие в различных интенсивах. ',
	],
	experience: [
		{
			position: 'Web-разработчик',
			duration: '2 года.',
			responsibilities: [
				'Участвовал в командной разработке веб-сайта.',
				'Верстал шаблоны на Django, выполнял стилизацию с использованием CSS.',
				'Реализовывал интерактивный функционал на JavaScript.',
				'Минимально взаимодействовал с Python.',
				'Разворачивал проект локально с помощью Docker.',
			],
		},
		{
			position: 'Frontend-разработчик',
			duration: '2 года.',
			responsibilities: [
				'Разработка и поддержка проектов заказчиков в команде разработчиков.',
				'Работал с JavaScript, TypeScript, React, GSAP, CSS, SCSS и другими технологиями.',
				'Взаимодействовал с заказчиками, анализировал ТЗ и координировал выполнение задач в команде для эффективной разработки в соответствии с требованиями.',
				'Оптимизировал интерфейсы и анимации для улучшения пользовательского опыта.',
			],
		},
	],
	certificates: [
		{
			id: 0,
			title: 'Green-Api',
			imgSrc: certificateGreenApi,
		},
		{
			id: 1,
			title: 'React',
			imgSrc: certificateReact,
		},
		{
			id: 2,
			title: 'JavaScript',
			imgSrc: certificateJs,
		},
		{
			id: 3,
			title: 'HTML',
			imgSrc: certificateHtml,
		},
		{
			id: 4,
			title: 'Frontend',
			imgSrc: certificateFrontend,
		},
	],
	skills: [
		{
			id: 0,
			title: 'HTML',
			info: 'Владею HTML5 и имею глубокое понимание его семантики. Могу создавать адаптивную и кроссбраузерную верстку с точностью до пикселя (PixelPerfect). Работаю с макетами в Photoshop и Figma.',
			icon: FaHtml5,
		},
		{
			id: 1,
			title: 'CSS',
			info: 'Опыт работы с препроцессорами (SCSS, LESS). Пишу по принципу методологии BEM. Умею создавать адаптивную и кроссбраузерную верстку, а также работать с CSS-анимациями.',
			icon: FaCss3,
		},
		{
			id: 2,
			title: 'JavaScript',
			info: 'Продвинутый уровень. Знания замыканий, прототипов, асинхронного программирования (Promises, async/await), ES6+ (классы, модули). Опыт работы с JSON, отладки кода (debugging).',
			icon: FaJs,
		},
		{
			id: 3,
			title: 'React',
			info: 'Хорошее знание React, опыт создания сложных пользовательских интерфейсов и SPA. В разработке использую React Router, Redux и его инструментами (например, Redux Toolkit).',
			icon: FaReact,
		},
		{
			id: 4,
			title: 'TypeScript',
			info: 'Использую TypeScript для строгой типизации в React-проектах, что помогает улучшить масштабируемость и уменьшить количество ошибок в коде.',
			icon: SiTypescript,
		},
		{
			id: 5,
			title: 'Git',
			info: 'Опыт работы с системой контроля версий Git. Использую для управления репозиториями, работы с ветками, слияниями, коммитами.',
			icon: FaGit,
		},
		{
			id: 6,
			title: 'GSAP',
			info: 'Работал с GSAP для создания анимаций. Могу интегрировать анимации в проекты, используя CSS или GSAP для более сложных движений.',
			icon: SiGreensock,
		},
		{
			id: 7,
			title: 'Webpack',
			info: 'Имею опыт работы с Webpack. Собирал проекты, настраивал сборку и тоннели для разработки.',
			icon: SiWebpack,
		},
		{
			id: 8,
			title: 'API',
			info: 'Опыт работы с API: отправка запросов (GET, POST, PUT, DELETE) на сервер с фронтенда для работы с данными в БД.',
			icon: TbApi,
		},
		{
			id: 9,
			title: 'Testing (Jest)',
			info: 'Имел опыт работы с Jest для тестирования компонентов и логики в React. Основной акцент на юнит-тестах.',
			icon: SiJest,
		},
		{
			id: 10,
			title: 'Functional Programming',
			info: 'Использую принципы функционального программирования для повышения читаемости и предсказуемости кода, включая такие подходы, как чистые функции и неизменяемость данных.',
			icon: FaCode,
		},
		{
			id: 11,
			title: 'Vite',
			info: 'Использую Vite для быстрого и удобного процесса сборки проектов. Он значительно ускоряет разработку благодаря быстрому перезапуску при изменении кода и поддерживает современные фичи, такие как модульная система ES и встроенная поддержка TypeScript.',
			icon: TbBrandVite,
		},
	],
	projects: [
		{
			title: 'Pomodoro',
			description: 'A productivity timer based on the Pomodoro technique.',
			link: 'https://github.com/Art-Vis/Pomodoro',
			img: pomodoro,
			tech: ['React', 'React Router', 'ChartJS', 'TypeScript', 'Scss', 'Vite'],
		},
		{
			title: 'Currency Converter',
			description: 'A currency converter app that uses live API data.',
			link: 'https://github.com/Art-Vis/Currency-Converter',
			img: converter,
			tech: ['React', 'React Router', 'ChartJS', 'TypeScript', 'Scss', 'Vite'],
		},
		{
			title: '3D Scroll',
			description: 'A unique scroll effect with 3D animations.',
			link: 'https://art-vis.github.io/3D-Scroll/',
			img: scroll,
			tech: ['React', 'React Router', 'ChartJS', 'TypeScript', 'Scss', 'Vite'],
		},
		{
			title: 'Calculator',
			description: 'A simple calculator built with JavaScript.',
			link: 'https://github.com/Art-Vis/Calculator',
			img: calculator,
			tech: ['React', 'React Router', 'ChartJS', 'TypeScript', 'Scss', 'Vite'],
		},
	],
};

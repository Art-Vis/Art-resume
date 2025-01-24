import { IUser } from './interface';
import pomodoro from '@assets/pomodoro1-n.png';
import converter from '@assets/converter1-n.png';
import scroll from '@assets/3d-scroll-n.png';
import calculator from '@assets/calculator1-n.png';

export const USER: IUser = {
	id: 0,
	email: 'artyom0698@bk.ru',
	fullName: 'Вишневецкий Артём',
	city: 'Санкт-Петербург',
	work: 'Frontend developer',
	img: './src/assets/im.jpg',
	bio: 'Привет! Меня зовут Артём, и я фронтенд разработчик с фокусом на создании удивительных пользовательских интерфейсов. Мой опыт включает в себя работу с HTML, CSS, JavaScript, React. Я стремлюсь к тому, чтобы каждый проект, над которым я работаю, был не только функциональным, но и красивым. Готов внести свой вклад в ваш следующий проект и принести к нему свежие идеи и энергию!',
	biography: [
		'Frontend-разработчик с 2-летним опытом работы в разработке. ',
		'Проявил интерес к компьютерам и программированию еще в раннем возрасте. ',
		'После окончания курсов в 2023, я начал свою карьеру в качестве фронтенд-разработчика. ',
		'Быстро освоился в этой области благодаря своей страсти к технологиям и творческому подходу к созданию пользовательских интерфейсов. ',
		'За все время обучения углубил свои знания в HTML, CSS, JavaScript и TypeScript а также приобрел опыт работы с различными фреймворками и библиотеками, такими как React и Vue.js. ',
		'Мой талант в создании эстетически привлекательных и интуитивно понятных интерфейсов. ',
		'Я активно слежу за новыми технологиями и тенденциями в области веб-разработки, участвую в профессиональных мероприятиях и конференциях, а также принимаю участие в интересных интенсивах. ',
	],
	skills: [
		{
			id: 0,
			title: 'HTML',
			info: 'Владею HTML5 и имею глубокое понимание его семантики и возможностей. Мои навыки включают создание чистой, адаптивной, кроссбраузерной и семантической верстки HTML-кода. При необходимости PixelPerfect. Имеется опыт оптимизации и улучшения производительности. Работа с макетами в Photoshop,Figma.',
		},
		{
			id: 1,
			title: 'CSS',
			info: 'Работаю с препроцессорами CSS, такими как Less и SCSS, и использую их для создания эффективного и модульного CSS-кода. Мои навыки включают использование переменных, миксинов, вложенности и других возможностей этих инструментов для упрощения и оптимизации стилей.',
		},
		{
			id: 2,
			title: 'JavaScript',
			info: 'Уровень владения JavaScript находится на продвинутом уровне. Я имею глубокое понимание языка, включая замыкания, прототипы и асинхронное программирование. ES6+ (в т. ч. классы, промисы, модули). Использование различных библиотек, Опыт работы с JSON, Debug кода',
		},
		{
			id: 3,
			title: 'React',
			info: 'Имею хороший уровень владения React.js. С помощью этой библиотеки я создавал сложные пользовательские интерфейсы и веб-приложения.',
		},
		{
			id: 4,
			title: 'TyeScript',
			info: 'Обладаю хорошими знаниями в TypeScript. Этот язык помогает мне писать более надежный и масштабируемый код в React и других проектах, обеспечивая строгую типизацию и уменьшение числа ошибок.',
		},
		{
			id: 5,
			title: 'Git',
			info: 'Владею системой контроля версий Git и использую ее для управления кодом и совместной разработки. Мои навыки включают работу с ветками, слияниями, коммитами, а также использование удаленных репозиториев и сервисов, таких как GitHub или GitLab.',
		},
		{
			id: 6,
			title: 'Остальное',
			info: 'Знаком с инструментами разработки, такими как Webpack, Babel, ESLint и Git. Эти инструменты помогают мне управлять и оптимизировать процесс разработки.Работа с анимациями(GSAP), React Router, Redux, Context API.',
		},
	],
	project: [
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

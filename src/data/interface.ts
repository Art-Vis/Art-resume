export interface IUser {
	readonly id: number;
	email: string;
	fullName: string;
	city: string;
	work: string;
	img: string;
	biography: string[];
	experience: ExperienceProps[];
	certificates: CertificateProps[];
	skills: SkillProps[];
	projects: ProjectProps[];
}

// Обо мне
export interface BiographyArrayProps {
	userBiography: string[];
}

// Опыт работы
export interface ExperienceProps {
	position: string; // Должность
	duration: string; // Стаж работы
	responsibilities: string[]; // Список обязанностей
}

// Сертификаты
export interface CertificateProps {
	readonly id: number; // Уникальный идентификатор сертификата
	title: string; // Название сертификата
	imgSrc: string; // Ссылка на изображение сертификата
}

// Навыки
export interface SkillProps {
	readonly id?: number; // Уникальный идентификатор навыка (опционально)
	title: string; // Название навыка
	info: string; // Краткое описание навыка
	icon: React.ElementType; // Компонент иконки
}

// Проект
export interface ProjectProps {
	link: string; // Ссылка на проект
	title: string; // Название проекта
	description: string; // Описание проекта
	img: string; // Ссылка на изображение проекта
	tech: string[]; // Используемые технологии
}

// Проекты
export interface ProjectsProps {
	userProjects: ProjectProps[]; // Массив проектов
}

// Карточка профиля
export interface ProfileCardProps {
	img: string;
	fullName: string;
	work: string;
}

// Вопросы (для тестов, квизов)
export interface QuestionProps {
	question: string; // Вопрос
	options: string[]; // Варианты ответа
	correctAnswer: string; // Правильный ответ
	onAnswer?: (isCorrect: boolean) => void; // Колбэк при ответе
}

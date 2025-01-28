export interface IUser {
	id: number;
	email: string;
	fullName: string;
	city: string;
	work: string;
	img: string;
	biography: string[];
	certificates: CertificateProps[];
	skills: SkillProps[];
	projects: ProjectCardProps[];
}

// Интерфейс для проекта
export interface ProjectCardProps {
	link: string; // Ссылка на проект
	title: string; // Название проекта
	description: string; // Описание проекта
	img: string; // Ссылка на изображение проекта
	tech: string[]; // Технологии, использованные в проекте
}

// Интерфейс для проекта
export interface ProjectsProps {
	userProjects: ProjectCardProps[];
}

export interface BiographyArrayProps {
	userBiography: string[];
}

// Интерфейс для списка биографии
export interface BiographyListProps {
	text: string; // Текст элемента биографии
}

export interface MyCertificatesProps {
	userCertificates: CertificateProps[];
}

// Интерфейс для сертификата
export interface CertificateProps {
	id: number; // Уникальный идентификатор сертификата
	title: string; // Название сертификата
	descr: string; // Описание сертификата
	imgSrc: string; // Ссылка на изображение сертификата
}

// Интерфейс для навыка
export interface SkillProps {
	id?: number; // Уникальный идентификатор навыка (опционально)
	title: string; // Название навыка
	info: string; // Краткое описание навыка
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Иконка для навыка
}

export interface SkillsProps {
	userSkills: SkillProps[];
}

export interface ProfileCardProps {
	img: string;
	fullName: string;
	work: string;
}

// Интерфейс для вопроса
export interface QuestionProps {
	question: string; // Вопрос
	options: string[]; // Варианты ответа
	correctAnswer: string; // Правильный ответ
	onAnswer: (isCorrect: boolean) => void; // Колбэк при ответе на вопрос
}

// Интерфейс для данных вопросов
export interface QuestionData {
	question: string; // Вопрос
	options: string[]; // Варианты ответа
	correctAnswer: string; // Правильный ответ
}

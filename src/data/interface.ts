export interface IUser {
	id: number;
	email: string;
	fullName: string;
	city: string;
	work: string;
	img: string;
	bio: string;
	biography: string[];
	skills: { id: number; title: string; info: string }[];
	project: { link: string; title: string; description: string }[];
}

export interface QuestionProps {
	question: string;
	options: string[];
	correctAnswer: string;
	onAnswer: (isCorrect: boolean) => void;
}

export interface QuestionData {
	question: string;
	options: string[];
	correctAnswer: string;
}

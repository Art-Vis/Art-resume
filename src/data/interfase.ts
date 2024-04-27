export interface IUser {
	id: number;
	email: string;
	fullName: string;
	city: string;
	work: string;
	img: string;
	bio: string;
	skills: { title: string }[];
	age: number;
}

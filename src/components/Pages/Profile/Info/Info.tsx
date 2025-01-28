import { FC } from 'react';
import Biography from '../Biography/Biography';
import MyCertificates from '../MyCertificates/MyCertificates';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import { IUser } from '@data/interface';
import './Info.scss';

const Info: FC<{ user: IUser }> = ({ user }) => {
	return (
		<section className='info'>
			<Biography userBiography={user.biography} />
			<MyCertificates userCertificates={user.certificates} />
			<Skills userSkills={user.skills} />
			<Projects userProjects={user.projects} />
		</section>
	);
};

export default Info;

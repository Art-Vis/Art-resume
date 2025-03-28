import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDG6ehUMhQ5OUF5RPZ4ZQ1-C5_u1VebZkQ',
	authDomain: 'art-resume-sn16.vercel.app',
	projectId: 'art-vis-partfolio',
	storageBucket: 'art-vis-partfolio.firebasestorage.app',
	messagingSenderId: '86637682101',
	appId: '1:86637682101:web:6dcb72f7b7b2bd75498dfc',
	measurementId: 'G-62BLT2NDDR',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

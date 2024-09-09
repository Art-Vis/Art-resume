import { Link } from 'react-router-dom';
import styles from './MyTest.module.css';

const MyTests = () => {
	return (
		<>
			<h1 className={styles.title}>Выберите тест</h1>
			<div className={styles.cards}>
				<div className={`${styles.card} ${styles.frontend}`}>
					<Link className={styles.cardLink} to={'/frontend-test'}></Link>
				</div>
				<div className={`${styles.card} ${styles.backend}`}>
					<Link className={styles.cardLink} to={'/#'}></Link>
				</div>
				<div className={`${styles.card} ${styles.fullstack}`}>
					<Link className={styles.cardLink} to={'/#'}></Link>
				</div>
			</div>
		</>
	);
};

export default MyTests;

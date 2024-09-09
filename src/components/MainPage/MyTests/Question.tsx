import { FC } from 'react';
import { QuestionProps } from '../../../data/interface';
import styles from './Question.module.css';

const Question: FC<QuestionProps> = ({
	question,
	options,
	correctAnswer,
	onAnswer,
}) => {
	const handleAnswerClick = (option: string) => {
		const isCorrect = option === correctAnswer;
		onAnswer(isCorrect);
	};

	return (
		<div className={styles.wrap}>
			<h2 className={styles.subtitle}>{question}</h2>
			<div className={styles.answers}>
				{options.map((option, index) => (
					<button
						className={styles.answerButton}
						key={index}
						onClick={() => handleAnswerClick(option)}
					>
						{option}
					</button>
				))}
			</div>
		</div>
	);
};

export default Question;

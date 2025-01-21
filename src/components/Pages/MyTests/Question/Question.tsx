import { FC } from 'react';
import './Question.scss';
import { QuestionProps } from '../../../../data/interface';

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
		<div className='questions'>
			<h2 className='questions__subtitle'>{question}</h2>
			<div className='questions__answers'>
				{options.map((option, index) => (
					<button
						className='questions__answer-button'
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

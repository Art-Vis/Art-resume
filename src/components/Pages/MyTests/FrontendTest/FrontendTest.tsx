import { FC } from 'react';
import { questionsFrontend } from '@data/question';
import Question from '../Question/Question';
import './FrontendTest.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { nextQuestion } from '@store/slices/questionSlices';

const InterviewTest: FC = () => {
	const currentQuestionIndex = useSelector(
		(state: RootState) => state.question.currentQuestionIndex
	);
	const isTestComplete = useSelector(
		(state: RootState) => state.question.isTestComplete
	);

	const dispatch = useDispatch();

	const handleAnswer = (isCorrect: boolean) => {
		if (isCorrect) {
			dispatch(nextQuestion());
		} else {
			alert('Неправильный ответ, еще раз.');
		}
	};
	return (
		<div className='test'>
			<h2 className='test__title'>Frontend</h2>
			{!isTestComplete ? (
				<Question
					question={questionsFrontend[currentQuestionIndex].question}
					options={questionsFrontend[currentQuestionIndex].options}
					correctAnswer={questionsFrontend[currentQuestionIndex].correctAnswer}
					onAnswer={handleAnswer}
				/>
			) : (
				<h3>Тест завершен, отличная работа!</h3>
			)}
			<div className='test__current-question'>
				{currentQuestionIndex + 1}/{questionsFrontend.length}
			</div>
		</div>
	);
};

export default InterviewTest;

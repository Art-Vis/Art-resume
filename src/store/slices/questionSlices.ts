import { createSlice } from '@reduxjs/toolkit';
import { questionsFrontend } from '../../data/question';

interface QuestionState {
	currentQuestionIndex: number;
	isTestComplete: boolean;
}

const initialState: QuestionState = {
	currentQuestionIndex: 0,
	isTestComplete: false,
};

const questionSlice = createSlice({
	name: 'question',
	initialState,
	reducers: {
		nextQuestion: state => {
			state.currentQuestionIndex += 1;
			if (state.currentQuestionIndex >= questionsFrontend.length) {
				state.isTestComplete = true;
			}
		},
		resetTest: state => {
			state.currentQuestionIndex = 0;
			state.isTestComplete = false;
		},
	},
});

export const { nextQuestion, resetTest } = questionSlice.actions;
export default questionSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './slices/questionSlices';
import menuReducer from './slices/menuSlices';

const store = configureStore({
	reducer: {
		question: questionReducer,
		menu: menuReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

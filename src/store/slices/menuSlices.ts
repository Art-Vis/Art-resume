import { createSlice } from '@reduxjs/toolkit';

interface BurgerState {
	burgerClass: string;
	menuClass: string;
	isMenuClicked: boolean;
}

const initialState: BurgerState = {
	burgerClass: 'burger-bar unclicked',
	menuClass: 'menu hidden',
	isMenuClicked: false,
};

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		openMenu: state => {
			if (!state.isMenuClicked) {
				state.burgerClass = 'burger-bar clicked';
				state.menuClass = 'menu visible';
			} else {
				state.burgerClass = 'burger-bar unclicked';
				state.menuClass = 'menu hidden';
			}
			state.isMenuClicked = !state.isMenuClicked;
		},
		closeMenu: state => {
			state.burgerClass = 'burger-bar unclicked';
			state.menuClass = 'menu hidden';
			state.isMenuClicked = false;
		},
	},
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;

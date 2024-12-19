import { createSlice } from '@reduxjs/toolkit';

interface BurgerState {
	burgerClass: string;
	menuClass: string;
	isMenuClicked: boolean;
	isMenuOpen: boolean;
}

const initialState: BurgerState = {
	burgerClass: 'burger-bar unclicked',
	menuClass: 'menu hidden',
	isMenuClicked: false,
	isMenuOpen: false,
};

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		openMenu: state => {
			state.isMenuOpen = true; // Устанавливаем меню в открытое состояние
		},
		closeMenu: state => {
			state.isMenuOpen = false; // Устанавливаем меню в закрытое состояние
		},
		toggleMenu: state => {
			state.isMenuOpen = !state.isMenuOpen; // Переключаем состояние меню
		},
	},
});

export const { openMenu, closeMenu, toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;

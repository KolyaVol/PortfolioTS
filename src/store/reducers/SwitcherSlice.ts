import {createSlice} from "@reduxjs/toolkit"

interface SwitcherState {
    isDark: boolean
    isRus: boolean
}

const initialState: SwitcherState = {
	isDark: false,
	isRus: false,
};

export const switcherSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toDarkTheme(state) {
            state.isDark = true
        },
        toLightTheme(state) {
            state.isDark = false
        },
        toRu(state) {
            state.isRus = true
        },
        toEn(state) {
            state.isRus = false
        }
    }
}
    
)
export const { toDarkTheme, toLightTheme, toRu, toEn } =
	switcherSlice.actions;
export default switcherSlice.reducer;

import {createSlice} from "@reduxjs/toolkit"

interface SwitcherState {
    isDark: boolean
    isEN: boolean
}

const initialState: SwitcherState = {
	isDark: false,
	isEN: false,
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
        }
    }
}
    
)
export const { toDarkTheme, toLightTheme } = switcherSlice.actions;
export default switcherSlice.reducer;

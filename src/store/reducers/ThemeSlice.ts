import {createSlice} from "@reduxjs/toolkit"

interface UserState {
    isDark: boolean
    
}

const initialState: UserState = {
    isDark: false
}

export const themeSlice = createSlice({
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
export const { toDarkTheme, toLightTheme } = themeSlice.actions;
export default themeSlice.reducer;

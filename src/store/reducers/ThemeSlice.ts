import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface UserState {
    theme: string
    
}

const initialState: UserState = {
    theme: 'light'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toDarkTheme(state) {
            state.theme = 'dark'
        },
        toLightTheme(state) {
            state.theme = 'light'
        }
    }
}
    
)
export const { toDarkTheme, toLightTheme } = themeSlice.actions;
export default themeSlice.reducer;

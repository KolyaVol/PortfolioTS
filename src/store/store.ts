import { combineReducers, configureStore } from "@reduxjs/toolkit";
import langReducer from "./reducers/LangSlice";
import switcherReducer from "./reducers/SwitcherSlice";

const rootReducer = combineReducers({
    switcherReducer,
    langReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
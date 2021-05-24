import { configureStore} from '@reduxjs/toolkit'
import combineReducer from './redux/Reducer'

export const store = configureStore({reducer : combineReducer, devTools: process.env.NODE_ENV !== "production",})

export type Tstore = ReturnType<typeof store.getState>;
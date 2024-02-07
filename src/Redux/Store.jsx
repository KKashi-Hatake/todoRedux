import {configureStore} from '@reduxjs/toolkit'
import todoReducers from './todoSlice'

export const store = configureStore({
    reducer:todoReducers
})
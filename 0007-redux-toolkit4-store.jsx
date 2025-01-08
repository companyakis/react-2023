import { configureStore } from '@reduxjs/toolkit'

import yearReducer from "..redux/yearSlice"

export const store = configureStore({
    reducer: {
        yearCounter: yearReducer
    }
})

// yearReducer and yearCounter are my selections
// we can use diff names...

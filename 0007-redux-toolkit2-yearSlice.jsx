import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    year: 2025
}

export const yearSlice = createSlice({
    name: "yearCounter",

    initialState,

    reducers: {
        incrementYear: (state) => {
            state.year = state.year + 1
        },

        decrementYear: (state) => {
            state.year = state.year - 1
        }
    },
})

export const { incrementYear, decrementYear } = yearSlice.actions

export default yearSlice.reducer

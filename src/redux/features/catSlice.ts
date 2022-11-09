import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface catState {
  currentCat: string,
	loading: boolean,
	error: boolean
}

// Define the initial state using that type
const initialState: catState = {
	currentCat: '',
	loading: false,
	error: false
}

export const catSlice = createSlice({
  name: 'cats',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: { 
	
    getCat: (state, action) => {
      state.loading = false;
      state.currentCat = action.payload;
    },
    
  }
})

export const {getCat} = catSlice.actions

export default catSlice.reducer
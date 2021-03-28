import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppThunk, RootState } from '../../store'

// Define a type for the slice state
interface ApiStatusState {
  online: boolean
}

// Define the initial state using that type
const initialState: ApiStatusState = {
  online: false
}

export const apiStatusSlice = createSlice({
  name: 'apiStatus',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeStatus: (state, action: PayloadAction<boolean>) => {
      state.online = action.payload;
    }
  },
})

export const connectToApi: AppThunk = async (dispatch) => {
  try{
    const url = process.env.REACT_APP_API_URL;
    const {alive} = await (await fetch(`${url}/api/health`)).json();
    dispatch(changeStatus(alive))
  } catch (err) {
    console.log(err);
  }
}

export const { changeStatus } = apiStatusSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectApiStatus = (state: RootState) => state.apiStatus.online;

export default apiStatusSlice.reducer;
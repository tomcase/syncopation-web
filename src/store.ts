import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit'
import apiStatusReducer from './components/ApiStatus/apiStatusSlice'
// ...

const store = configureStore({
  reducer: {
    apiStatus: apiStatusReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>

export default store;
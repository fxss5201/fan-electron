import { configureStore } from '@reduxjs/toolkit'
import localeStore from './localeStore'
import userInfoStore from './userInfoStore'

const store = configureStore({
  reducer: {
    localeStore,
    userInfoStore
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store

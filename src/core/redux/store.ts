import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/counter';
import mapStateReducer from './slices/globe_mode_reducer';
import globalState from './slices/globalState'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    mapActivityState: mapStateReducer,
    globalState, // global state

  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
import { configureStore } from '@reduxjs/toolkit';
import threadsReducer from './threadsSlice';
import repliesReducer from './replySlice';

const store = configureStore({
  reducer: {
    threads: threadsReducer,
    replies: repliesReducer,
  },
});

export default store;

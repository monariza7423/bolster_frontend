import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Thread {
  id: number;
  title: string;
  name: string;
  content: string;
}

export interface ThreadsState {
  threads: Thread[];
}

const initialState: ThreadsState = {
  threads: [],
};

const threadsSlice = createSlice({
  name: 'threads',
  initialState,
  reducers: {
    setThreads: (state, action: PayloadAction<Thread[]>) => {
      state.threads = action.payload;
    },
    addThread: (state, action: PayloadAction<Thread>) => {
      state.threads.push(action.payload);
    },
    deleteThread: (state, action: PayloadAction<number>) => {
      state.threads = state.threads.filter(thread => thread.id !== action.payload);
    },
  },
});

export const { setThreads, addThread, deleteThread } = threadsSlice.actions;
export default threadsSlice.reducer;

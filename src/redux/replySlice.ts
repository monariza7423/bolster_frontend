import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Reply {
  id: number;
  threadId: number;
  name: string;
  content: string;
}

export interface RepliesState {
  replies: {
    [threadId: string]: Reply[];
  };
}

const initialState: RepliesState = {
  replies: {},
};

const repliesSlice = createSlice({
  name: 'replies',
  initialState,
  reducers: {
    setReplies: (state, action: PayloadAction<{ threadId: string; replies: Reply[] }>) => {
      state.replies[action.payload.threadId] = action.payload.replies;
    },
    addReply: (state, action: PayloadAction<{ threadId: string; reply: Reply }>) => {
      if (!state.replies[action.payload.threadId]) {
        state.replies[action.payload.threadId] = [];
      }
      state.replies[action.payload.threadId].push(action.payload.reply);
    },
  },
});

export const { setReplies, addReply } = repliesSlice.actions;
export default repliesSlice.reducer;

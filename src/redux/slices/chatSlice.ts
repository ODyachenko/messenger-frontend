import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChatListType } from '../../../@types';

interface CounterState {
  showProfile: boolean;
  chatList: Partial<ChatListType[]>;
  activeChat: Partial<ChatListType>;
}

const initialState: CounterState = {
  showProfile: false,
  chatList: [],
  activeChat: {},
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setShowProfile: (state) => {
      state.showProfile = !state.showProfile;
    },
    setChatList: (state, action: PayloadAction<ChatListType>) => {
      state.chatList = action.payload;
    },
    setActiveChat: (state, action: PayloadAction<number>) => {
      const activeChat = state.chatList.find(
        (chat) => chat?.id === action.payload
      );
      activeChat && (state.activeChat = activeChat);
    },
  },
});

export const { setShowProfile, setChatList, setActiveChat } = chatSlice.actions;
export default chatSlice.reducer;

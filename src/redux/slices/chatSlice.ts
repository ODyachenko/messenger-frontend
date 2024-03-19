import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  showProfile: boolean;
}

const initialState: CounterState = {
  showProfile: false,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setShowProfile: (state) => {
      state.showProfile = !state.showProfile;
    },
  },
});

export const { setShowProfile } = chatSlice.actions;
export default chatSlice.reducer;

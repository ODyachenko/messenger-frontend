import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CreateUserType } from '../../../@types';

// Define a type for the slice state
interface CounterState {
  isAuth: boolean;
  currentUser: Partial<CreateUserType>;
}

// Define the initial state using that type
const initialState: CounterState = {
  isAuth: false,
  currentUser: {},
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<CreateUserType>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setIsAuth, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;

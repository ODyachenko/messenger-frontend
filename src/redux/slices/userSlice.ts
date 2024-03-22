import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CreateUserType } from '../../../@types';

// Define a type for the slice state
interface CounterState {
  isAuth: boolean;
  currentUser: Partial<CreateUserType>;
  usersList: Partial<CreateUserType>[];
}

// Define the initial state using that type
const initialState: CounterState = {
  isAuth: false,
  currentUser: {},
  usersList: [],
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
    setUsersList: (state, action: PayloadAction<CreateUserType>) => {
      state.usersList = action.payload;
    },
  },
});

export const { setIsAuth, setCurrentUser, setUsersList } = userSlice.actions;
export default userSlice.reducer;

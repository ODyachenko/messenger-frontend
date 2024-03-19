import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import chatSlice from './slices/chatSlice';
import userSlice from './slices/userSlice';
import { userAPI } from './API/userAPI';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    chat: chatSlice,
    user: userSlice,

    [userAPI.reducerPath]: userAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

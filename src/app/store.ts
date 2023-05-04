// store for redux
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import themeReducer from "../features/theme/themSlice";
import UserCardReducer from "../features/users/UserCardSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    theme: themeReducer,
    userCard: UserCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

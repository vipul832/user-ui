import { createSlice } from "@reduxjs/toolkit";
import { users, USERS } from "../../constant/userData";
import { RootState } from "../../app/store";

const initialState: USERS = {
  userData: users,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state: RootState) => state.users.userData;

export default userSlice.reducer;

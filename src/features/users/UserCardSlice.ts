import { createSlice } from "@reduxjs/toolkit";
import { UserObject } from "../../constant/userData";
import { RootState } from "../../app/store";

const initialState: UserObject[] = [
  // {
  //   id: "641c3406f8c26a9cb62a4c79",
  //   first_name: "George",
  //   last_name: "Bluth",
  //   email: "george.bluth@reqres.in",
  //   avatar: "https://reqres.in/img/faces/1-image.jpg",
  //   active: true,
  //   owner: true,
  //   role: "Manager",
  //   removable: false,
  // },
];

const userCardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    mouseEnter: (state, action) => {
      state.push(action.payload);
    },
    mouseLeave: (state) => {
      state.pop();
    },
  },
});

export const currentUser = (state: RootState) => state.userCard[0];

export const { mouseEnter, mouseLeave } = userCardSlice.actions;

export default userCardSlice.reducer;

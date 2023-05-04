import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = {
  themeColor: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.themeColor = !state.themeColor;
    },
  },
});

export const themeValue = (state: RootState) => state.theme.themeColor;

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;

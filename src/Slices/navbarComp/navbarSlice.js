import { createSlice } from "@reduxjs/toolkit";
import { initialNavbarState } from "./common";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: initialNavbarState,
  reducers: {
    toggleNavbar: (state) => {
      state.isOpen = !state.isOpen;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { toggleNavbar, login, logout } = navbarSlice.actions;
export default navbarSlice.reducer;

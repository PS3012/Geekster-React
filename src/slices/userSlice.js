import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    storageUsed: 0,
  },
  reducers: {
    loginUser(state, action) {
      localStorage.setItem("driveUser", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logoutUser(state) {
      localStorage.removeItem("driveUser");
      state.user = {};
    },
    updateStorageUsed(state, action) {
      state.storageUsed = action.payload;
    },
  },
});

export const { loginUser, logoutUser, updateStorageUsed } = userSlice.actions;
export default userSlice.reducer;

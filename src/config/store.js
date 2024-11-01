import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../slices/contactSlice";
import userReducer from "../slices/userSlice";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: userReducer,
  },
});

export default store;

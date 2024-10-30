import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contactsList: [],
    editableContactId: "",
    showOnlyFav: false,
  },
  reducers: {
    addContact(state, action) {
      state.contactsList.push({ ...action.payload, id: Date.now().toString() });
    },
    deleteContact(state, action) {
      const editIdx = state.contactsList.findIndex(
        (ele) => ele.id === action.payload
      );
      if (editIdx >= 0) {
        state.contactsList.splice(editIdx, 1);
      }
    },
    favouriteContact(state, action) {
      const editIdx = state.contactsList.findIndex(
        (ele) => ele.id === action.payload
      );
      if (editIdx >= 0) {
        state.contactsList[editIdx].isFav = !state.contactsList[editIdx].isFav;
      }
    },
    setEditableContactId(state, action) {
      state.editableContactId = action.payload;
    },
    editContact(state, action) {
      const editIdx = state.contactsList.findIndex(
        (ele) => ele.id === action.payload.id
      );
      if (editIdx >= 0) {
        state.contactsList.splice(editIdx, 1, action.payload);
        state.editableContactId = "";
      }
    },
    showOnlyFavourites(state, action) {
      state.showOnlyFav = action.payload;
    },
  },
});

export const {
  addContact,
  editContact,
  deleteContact,
  favouriteContact,
  setEditableContactId,
  showOnlyFavourites,
} = contactSlice.actions;
export default contactSlice.reducer;

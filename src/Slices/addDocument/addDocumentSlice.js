import { createSlice } from "@reduxjs/toolkit";
import { initialDocumentState } from "./common";

const addDocumentSlice = createSlice({
  name: "documentsadd",
  initialState: initialDocumentState,
  reducers: {
    setDocumentName: (state, action) => {
      state.documentName = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setFile: (state, action) => {
      state.file = action.payload;
    },
    addDocument: (state, action) => {
      state.documents.push(action.payload);
      localStorage.setItem("documents", JSON.stringify(state.documents));
    },
    clearForm: (state) => {
      state.documentName = "";
      state.description = "";
      state.file = null;
    },
  },
});

export const {
  setDocumentName,
  setDescription,
  setFile,
  addDocument,
  clearForm,
} = addDocumentSlice.actions;
export default addDocumentSlice.reducer;

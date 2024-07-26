import { createSlice } from "@reduxjs/toolkit";
import { initialDocumentState } from "./common";

const documentSlice = createSlice({
  name: "documents",
  initialState: initialDocumentState,
  reducers: {
    setDocuments: (state, action) => {
      state.documents = action.payload;
      localStorage.setItem("documents", JSON.stringify(state.documents));
    },
    setSelectedDocument: (state, action) => {
      state.selectedDocument = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    addDocument: (state, action) => {
      state.documents.push(action.payload);
      localStorage.setItem("documents", JSON.stringify(state.documents));
    },
    deleteDocument: (state, action) => {
      state.documents = state.documents.filter(
        (doc) => doc.id !== action.payload
      );
      localStorage.setItem("documents", JSON.stringify(state.documents));
    },
  },
});

export const {
  setDocuments,
  setSelectedDocument,
  setShowModal,
  setSearchQuery,
  addDocument,
  deleteDocument,
} = documentSlice.actions;

export default documentSlice.reducer;

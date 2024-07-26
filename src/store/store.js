import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./../Slices/navbarComp/navbarSlice";
import authReducer from "./../Slices/loginPage/loginSlice";
import documentReducer from "./../Slices/documentList/documentSlice";
import documentAddReducer from "./../Slices/addDocument/addDocumentSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    auth: authReducer,
    documents: documentReducer,
    documentsadd: documentAddReducer,
  },
});

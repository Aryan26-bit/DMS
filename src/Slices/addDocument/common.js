export const initialDocumentState = {
  documentName: "",
  description: "",
  file: null,
  documents: JSON.parse(localStorage.getItem("documents")) || [],
};

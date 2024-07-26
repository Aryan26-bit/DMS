export const initialDocumentState = {
  documents: JSON.parse(localStorage.getItem("documents")) || [],
  selectedDocument: null,
  searchQuery: "",
  showModal: false,
};

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setDocuments,
  setSelectedDocument,
  setShowModal,
  setSearchQuery,
  deleteDocument,
} from "./../../Slices/documentList/documentSlice";
import Modal from "./../Modal/Modal";
import "./../DocumentList/DocumentList.scss";

const DocumentList = () => {
  const dispatch = useDispatch();
  const { documents, selectedDocument, searchQuery, showModal } = useSelector(
    (state) => state.documents
  );

  useEffect(() => {
    const storedDocuments = JSON.parse(localStorage.getItem("documents")) || [];
    dispatch(setDocuments(storedDocuments));
  }, [dispatch]);

  const handleViewDocument = (id) => {
    const document = documents.find((doc) => doc.id === id);
    dispatch(setSelectedDocument(document));
    dispatch(setShowModal(true));
  };

  const handleDeleteDocument = (id) => {
    dispatch(deleteDocument(id));
  };

  const filteredDocuments = documents.filter((document) =>
    document.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderModalContent = () => {
    if (selectedDocument && selectedDocument.file) {
      if (selectedDocument.file.type.includes("image")) {
        return (
          <img
            src={selectedDocument.file.data}
            alt="Document"
            className="modal-image"
          />
        );
      }
      if (selectedDocument.file.type.includes("pdf")) {
        return (
          <embed
            src={selectedDocument.file.data}
            type="application/pdf"
            className="modal-pdf"
          />
        );
      }
    }
    return null;
  };

  return (
    <>
      <div className="document-list-container">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </div>
        <h2 className="title">Document List</h2>
        {documents.length === 0 ? (
          <div className="no-documents-message">
            There are no documents. Please add a document.
          </div>
        ) : (
          <div className="document-cards">
            {filteredDocuments.map((document) => (
              <div className="document-card" key={document.id}>
                <div className="card-header">
                  <h3 className="card-title">{document.name}</h3>
                  <span className="card-date">{document.date}</span>
                </div>
                <div className="card-actions">
                  <button
                    className="btn-view"
                    onClick={() => handleViewDocument(document.id)}
                  >
                    View
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDeleteDocument(document.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => dispatch(setShowModal(false))}
        title={selectedDocument?.name || "Document"}
        content={renderModalContent()}
      />
    </>
  );
};

export default DocumentList;

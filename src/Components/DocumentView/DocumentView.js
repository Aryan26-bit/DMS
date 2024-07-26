import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setDocumentName,
  setDescription,
  setFile,
  addDocument,
  clearForm,
} from "./../../Slices/addDocument/addDocumentSlice";
import "./../DocumentView/DocumentView.scss";
import imageCompression from "browser-image-compression";
const MAX_FILE_SIZE_MB = 10;

const AddDocument = () => {
  const { documentName, description, file, documents } = useSelector(
    (state) => state.documentsadd
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDocumentNameChange = (e) => {
    dispatch(setDocumentName(e.target.value));
  };

  const handleDescriptionChange = (e) => {
    dispatch(setDescription(e.target.value));
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        toast.error(`File size should not exceed ${MAX_FILE_SIZE_MB}MB.`);
        return;
      }

      try {
        let compressedFile = selectedFile;
        if (selectedFile.type.includes("image")) {
          const options = {
            maxSizeMB: MAX_FILE_SIZE_MB,
            maxWidthOrHeight: 1024,
            useWebWorker: true,
          };
          compressedFile = await imageCompression(selectedFile, options);
        }

        const reader = new FileReader();
        reader.onloadend = () => {
          dispatch(
            setFile({
              name: compressedFile.name,
              type: compressedFile.type,
              data: reader.result,
            })
          );
          toast.success("File uploaded successfully.");
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        toast.error("Error compressing or reading file.");
      }
    }
  };

  const handleAddDocument = () => {
    if (!documentName.trim() || !description.trim() || !file) {
      toast.error("Please fill in all fields.");
      return;
    }

    const currentDate = new Date().toLocaleDateString();
    const newDocument = {
      id: documents.length + 1,
      name: documentName,
      description: description,
      file: file,
      date: currentDate,
    };

    try {
      dispatch(addDocument(newDocument));
      dispatch(clearForm());
      toast.success("Document added successfully.");
      navigate("/documents");
    } catch (error) {
      toast.error("Error saving document.");
    }
  };

  return (
    <div className="add-document-container">
      <div className="form-container">
        <h2>Add New Document</h2>
        <label htmlFor="documentName" className="form-label">
          Document Name
        </label>
        <input
          type="text"
          className="form-control"
          id="documentName"
          value={documentName}
          onChange={handleDocumentNameChange}
        />
        <label htmlFor="description" className="form-label mt-3">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <label htmlFor="file" className="form-label mt-3">
          Select File
        </label>
        <input
          type="file"
          className="form-control"
          id="file"
          onChange={handleFileChange}
          accept="image/*,application/pdf"
        />
        <div className="button-group">
          <button className="btn-submit" onClick={handleAddDocument}>
            Submit
          </button>
          <button className="btn-back" onClick={() => navigate("/documents")}>
            <IoReturnDownBackSharp />
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddDocument;

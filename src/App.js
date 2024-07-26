import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocumentList from "./Components/DocumentList/DocumentList";
import DocumentView from "./Components/DocumentView/DocumentView";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div style={{ overflowX: "auto" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/documents" element={<DocumentList />} />
          <Route path="/documentview" element={<DocumentView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

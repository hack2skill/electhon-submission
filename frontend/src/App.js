import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  document.title = "Democratic Desk";

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Base />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;

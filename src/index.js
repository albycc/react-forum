import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/startpage";
import PostPage from "./pages/postpage";
import MissingPage from "./pages/missingpage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<StartPage />} />
          <Route path="post/:id" element={<PostPage />} />
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

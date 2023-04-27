import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages-components/HomePage/HomePage";

const MainRoute = () => {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default MainRoute;

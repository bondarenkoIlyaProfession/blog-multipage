import React from "react";
import { Routes, Route } from "react-router-dom";

import "./scss/styles.scss";

import { Home, Blog, Works, WorkDetail, Error } from "./pages";
import { Header, Footer } from "./components";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/works" element={<Works />} />
        <Route path="/work-detail" element={<WorkDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}
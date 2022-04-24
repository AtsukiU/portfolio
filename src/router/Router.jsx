import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContactForm from "../Roots/ContactForm";
import Skills from "../Roots/Skills";
import MainPage from "../Roots/MainPage";
import SchoolAndJob from "../Roots/SchoolAndJob";
import PortFolioPage from "../Roots/PortFolioPage";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";


const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/portfolio" element={<PortFolioPage />} />
        <Route exact path="skill" element={<Skills />} />
        <Route exact path="experience" element={<SchoolAndJob />} />
        <Route exact path="contact" element={<ContactForm />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;

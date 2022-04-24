import React from "react";
import { Route, Routes,} from "react-router-dom";
import ContactForm from "../Roots/ContactForm";
import Skills from "../Roots/Skills";
import MainPage from "../Roots/MainPage";
import SchoolAndJob from "../Roots/SchoolAndJob";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="skill" element={<Skills />} />
      <Route exact path="experience" element={<SchoolAndJob />} />
      <Route exact path="contact" element={<ContactForm />} />
    </Routes>
  );
};

export default Router;

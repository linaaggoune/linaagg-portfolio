import { Route, Routes } from "react-router-dom";

import IndexPage from "./pages/index";

import AboutPage from "./pages/about";
import SkillsPage from "./pages/skills.tsx";
import ProjectsPage from "./pages/projects.tsx";
import ContactPage from "./pages/contact.tsx";

import { useEffect } from "react";
import i18n from "./i18n";
function App() {
  console.log("App component loaded!");
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
    console.log(document.documentElement.lang, "hellooo");
  }, [i18n.language]);

  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<SkillsPage />} path="/skills" />
      <Route element={<ProjectsPage />} path="/projects" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;

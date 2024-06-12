import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import NavBar from "./components/NavBar";
import ProjectDetails from "./pages/ProjectDetails";

//
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import MainLayout from "./components/MainLayout";
import UserProvider from "./context/UserContext";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <MainLayout>
          <UserProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
          </UserProvider>
        </MainLayout>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {
  const [theme, setTheme] /* eslint-disable-line */ = useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  });

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar toggleTheme={toggleTheme} theme={theme} />

              <Home toggleTheme={toggleTheme} theme={theme} />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <div className="md:flex justify-center w-screen min-h-screen bg-white dark:bg-gray-800">
                <Contact />
              </div>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;

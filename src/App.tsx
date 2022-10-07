import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
// use BrowserRouter if error
import Navbar from "./components/Navbar";
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
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route
          path="/"
          element={<Home toggleTheme={toggleTheme} theme={theme} />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      return "light";
    }
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
    <BrowserRouter>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

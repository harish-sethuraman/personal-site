import React, { useEffect, useState } from "react";
import { setItem, updateItem, getItem } from "../../utils/localStorage";

const ThemeSelector = () => {
  const [theme, toggleTheme] = useState("light");

  const changeTheme = (optionalTheme) => {
    toggleTheme(optionalTheme)
    updateItem("theme", optionalTheme);
    document.getElementsByTagName("body")[0].classList = optionalTheme;
  };

  useEffect(() => {
    const storedData = getItem("theme");
    storedData !== null ? changeTheme(storedData) : changeTheme("light");
    storedData !== null ? updateItem("theme", storedData) : updateItem('theme', "light")
  }, []);

  return (
    <div className="theme-selector">
      <i
        className={`theme ${theme == "light" ? "fa fa-moon-o" : "fa fa-sun-o" }`}
        style={{ zIndex: "100" }}
        onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
      ></i>
    </div>
  );
};
const Navbar = () => {
  const [navStatus, toggleNav] = useState(false);

  return (
    <header className="navbar-header fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="index-3-dark.html"></a>
          <button
            onClick={() => toggleNav((navStatus) => !navStatus)}
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbarNavDropdown"
            data-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${navStatus && "show"}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ml-auto scrollspy">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#experience" className="nav-link">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <ThemeSelector />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { updateItem, getItem } from '../../utils/localStorage';

const ThemeSelector = ({ insideBigSur }) => {
  const [theme, toggleTheme] = useState('light');

  const changeTheme = (optionalTheme) => {
    toggleTheme(optionalTheme);
    updateItem('theme', optionalTheme);
    if (insideBigSur) {
      document.getElementsByClassName('portfolio-frame')[0].contentWindow.document.getElementsByClassName('frame-content')[0].classList = `frame-content ${optionalTheme}`;
    } else {
      document.getElementById('root').classList = optionalTheme;
    }
  };

  useEffect(() => {
    const storedData = getItem('theme');
    storedData !== null ? changeTheme(storedData) : changeTheme('light');
    storedData !== null ? updateItem('theme', storedData) : updateItem('theme', 'light');
  }, []);

  return (
    <div className="theme-selector">
      <i
        className={`theme ${theme === 'light' ? 'fa fa-moon-o' : 'fa fa-sun-o'}`}
        style={{ zIndex: '100' }}
        onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </div>
  );
};
const Navbar = ({ insideBigSur }) => {
  const location = useLocation();
  const [navStatus, toggleNav] = useState(false);

  return (
    <header className="navbar-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            onClick={() => toggleNav((oldNavStatus) => !oldNavStatus)}
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbarNavDropdown"
            data-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse ${navStatus && 'show'}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ml-auto scrollspy">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname.slice(1) === '' && 'active'}`} to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to='/#about'>About</Link>
              </li> */}
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname.slice(1) === 'projects' && 'active'}`} to="/projects">Projects</Link>
              </li>
              {/* {location.pathname.slice(1) === '' && (
              <li className="nav-item">
                <a className="nav-link" href="#experience">Experience</a>
              </li>
              )} */}
              <li className="nav-item">
                <ThemeSelector insideBigSur={insideBigSur} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

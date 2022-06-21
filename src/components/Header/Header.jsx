import React, { useRef, useState } from 'react';
import { FcAbout } from 'react-icons/fc';
import { FaInfo, FaProjectDiagram } from 'react-icons/fa';
import { GrClose, GrTechnology } from 'react-icons/gr';
import { HiMenuAlt1 } from 'react-icons/hi';
import { BsTelegram, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

import './Header.less';

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const closeMenu = useRef();

  return (
    <header id="header" className="header flex">
      <div className="logo">
        <h3 id="logo">TERNENGE</h3>
        <div className="underline"></div>
      </div>
      {/* socia; icons */}
      <div className="social-icons flex">
        <a target="_blank" href="https://github.com/ternenge-s">
          <BsGithub />
        </a>
        <a
          target="_blank"
          href="https://linkedin.com/in/ternenge-samuel-216980201"
        >
          <BsLinkedin />
        </a>
        <a target="_blank" href="https://t.me/ternenge0">
          <BsTelegram />
        </a>
      </div>

      {/*page progressbar */}

      <div className="loader">
        <div className="seeker"></div>
      </div>
      {/* navigation bar */}

      <nav className="navbar">
        {innerWidth < 700 && (
          <div className="navbar-toggler">
            {navbar ? (
              <GrClose onClick={() => setNavbar(false)} />
            ) : (
              <HiMenuAlt1 onClick={() => setNavbar(true)} />
            )}
          </div>
        )}

        {''}
        <ul className={`nav-list ${navbar ? 'open' : ''}`}>
          <li className="nav-item" onClick={() => setNavbar(false)}>
            <a href="#hero">home</a>
          </li>

          <li className="nav-item" onClick={() => setNavbar(false)}>
            <a href="#projects">projects</a>
          </li>

          <li className="nav-item" onClick={() => setNavbar(false)}>
            <a href="#tech">technologies</a>
          </li>
          <li className="nav-item" onClick={() => setNavbar(false)}>
            <a href="#about">about</a>
          </li>

          <li className="nav-item" onClick={() => setNavbar(false)}>
            <a href="#contact">contact</a>
          </li>

          <div className="icons">
            <a target="_blank" href="https://github.com/ternenge-s">
              <BsGithub />
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/ternenge-samuel-216980201"
            >
              <BsLinkedin />
            </a>
            <a target="_blank" href="https://t.me/ternenge0">
              <BsTelegram />
            </a>
            <a target="_blank" href="https://twitter.com">
              <BsTwitter />
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

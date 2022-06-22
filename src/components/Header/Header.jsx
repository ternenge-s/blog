import React, { useEffect, useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { HiMenuAlt1 } from 'react-icons/hi';
import { BsTelegram, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

import './Header.less';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [progress, setProgress] = useState(0);

  document.addEventListener('scroll', () => {
    getScroll();
  });

  function getScroll() {
    let distanceFromTop = document.documentElement.scrollTop;

    let Height = document.querySelector('#footer').offsetTop;

    let scrollPercent = (distanceFromTop / Height) * 100;

    setProgress(() => scrollPercent);
  }

  return (
    <header id="header" className="header flex">
      <div className="logo">
        <h3 id="logo">TERNENGE</h3>
        <div className="underline"></div>
      </div>

      {innerWidth > 700 && (
        <ul className="wide-nav-list">
          <li className="nav-item">
            <a href="#hero">home</a>
          </li>

          <li className="nav-item">
            <a href="#projects">projects</a>
          </li>

          <li className="nav-item">
            <a href="#tech">technologies</a>
          </li>
          <li className="nav-item">
            <a href="#about">about</a>
          </li>

          <li className="nav-item">
            <a href="#contact">contact</a>
          </li>
        </ul>
      )}

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

      {innerWidth < 700 && (
        <div className="loader">
          <div
            className="seeker"
            style={{
              background: `linear-gradient(to right, #ff75bb ${
                progress + '%'
              }, transparent 0)`,
            }}
          ></div>
        </div>
      )}
      {/* navigation bar */}

      {innerWidth < 700 && (
        <nav className="navbar">
          {innerWidth < 700 && (
            <div className="navbar-toggler">
              {!navbar ? (
                <HiMenuAlt1 onClick={() => setNavbar(true)} />
              ) : (
                <GrFormClose onClick={() => setNavbar(false)} />
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
      )}
    </header>
  );
};

export default Header;

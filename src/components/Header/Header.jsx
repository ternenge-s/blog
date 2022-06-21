import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { FaInfo, FaProjectDiagram } from 'react-icons/fa';
import { GrTechnology } from 'react-icons/gr';
import { BsTelegram } from 'react-icons/bs';

import './Header.less';

const Header = () => {
  return (
    <header className="header flex">
      <div className="logo font-bold text-white">
        <h3>Ternenge</h3>
      </div>
      <nav className="nav flex">
        <li>
          <a href="#projects" name="projects">
            {innerWidth > 780 ? 'projects' : <FaProjectDiagram />}
          </a>
        </li>
        <li>
          <a href="#tech" name="technologies">
            {innerWidth > 780 ? (
              'technologies'
            ) : (
              <GrTechnology className="bg-white" />
            )}
          </a>
        </li>
        <li>
          <a href="#about" name="about">
            {innerWidth > 780 ? 'about' : <FcAbout />}
          </a>
        </li>
      </nav>
      <div className="social-icons flex">
        <a href="#">
          <AiFillGithub />
        </a>
        <a href="#">
          <AiFillLinkedin />
        </a>
        <a href="#">
          <BsTelegram />
        </a>
      </div>
    </header>
  );
};

export default Header;

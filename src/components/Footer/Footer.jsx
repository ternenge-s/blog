import React from 'react';
import { BsTelegram, BsWhatsapp, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import Form from './Form';

import './Footer.less';

const Footer = () => {
  return (
    <footer id="footer" className="footer px-5 text-white">
      {/*about */}
      <div id="about" className="about">
        <h3 className="text-sky-500 my-3">About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          cupiditate dicta, necessitatibus doloribus porro eveniet, deleniti
        </p>
      </div>

      {/*Contact section */}
      <div id="contact" className="contact">
        {/* mail */}

        <div className="mail">
          <h3 className="">send me a mail</h3>
          <Form />
        </div>
        {/* call */}

        <div className="call mx-auto">
          <FiPhoneCall />

          <a href="tel:+2348039950097">+234 803 9950 097</a>
        </div>

        {/* social */}

        <div className="social">
          <h3>chat me on social media</h3>

          <div className="social-icons">
            <a href="#">
              {' '}
              <BsGithub />
            </a>
            <a href="#">
              <BsLinkedin />
            </a>
            <a href="#">
              {' '}
              <BsTelegram />
            </a>
            <a href="#">
              <BsWhatsapp />
            </a>
          </div>
        </div>

        {/*copy rights */}
        <p className="text-center text-white ">
          &copy; 2022 Ternenge, all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

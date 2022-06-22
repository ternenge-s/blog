import React from 'react';
import { BsTelegram, BsWhatsapp, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import Form from './Form';

import './Footer.less';

const Footer = () => {
  return (
    <footer id="footer" className="footer px-5 container">
      {/*about */}
      <div id="about" className="about">
        <h2 className="heading">About</h2>
        <p>
          I am an enthusiastic web developer who constantly seeks out productive
          and innovative solutions that get the job done right. Within my years
          in this industry, i have achieved collaborative and progressive skills
          that meets up the formal requirements for an excellent developer and
          freelancer. I love and enjoy web development and i am commited to it.
        </p>
      </div>

      {/*Contact section */}
      <div id="contact" className="contact">
        {/* mail */}

        <div className="mail">
          <h3 className="">send me a mail</h3>
          <Form />
        </div>

        {/* social */}

        <div className="social">
          <h3>chat me on social media</h3>

          <div className="social-icons">
            <a target="_blank" href="https://github.com/ternenge-s">
              {' '}
              <BsGithub />
            </a>
            <a target="_blank" href="https://linkedin.com/in/">
              <BsLinkedin />
            </a>
            <a target="_blank" href="https://t.me/ternenge0">
              <BsTelegram />
            </a>
            <a target="_blank" href="https://wa.me/2349013089948">
              <BsWhatsapp />
            </a>
          </div>
        </div>

        {/*copy rights */}
        <p className="text-center">&copy; 2022 Ternenge, all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

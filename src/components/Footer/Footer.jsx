import React, { useEffect, useState } from "react";
import { BsTelegram, BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import Form from "./Form";
import { client } from "../../studio";
import "./Footer.less";

const Footer = () => {
  const [About, setAbout] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type == "about"]`)
      .then((data) => {
        setAbout(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <footer id="footer" className="footer px-5 container">
      {/*about */}
      <div id="about" className="about">
        <h2 className="heading">About</h2>
        {About.map((item) => {
          return <p key={item._id}>{item.about}</p>;
        })}
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
              {" "}
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

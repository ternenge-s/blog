import React from 'react';

import './Hero.less';

const Hero = () => {
  return (
    <section id="hero" className="hero container text-white">
      <div className="head">
        <h1>Hello dear,</h1>
        <h1>wellcome to my portolio</h1>
      </div>

      <div className="objective-note">
        <p>
          I am an enthusiastic web developer with the aim of building fast and
          scaleble web pages using latest and most perfomance enhanced
          technologies. Here you see some of my awesome projects built as
          desired by my clients.
        </p>
      </div>

      <div className="btn-group">
        <a
          href=""
          download="t_resume.pdf"
          className="btn res rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500"
        >
          Download my Resume
        </a>
      </div>

      <div className="section_divider"></div>
    </section>
  );
};

export default Hero;

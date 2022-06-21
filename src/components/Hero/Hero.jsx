import React from 'react';

import './Hero.less';

const Hero = () => {
  return (
    <section id="hero" className="hero text-white">
      <div className="head">
        <h1>Hello dear,</h1>
        <h1>wellcome to my portlio</h1>
      </div>

      <div className="objective-note">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          numquam itaque provident molestiae quidem molestias sint, minima nobis
          ad repellendus, deleniti voluptas, ab iure vel dolor eius voluptatem
          atque. Praesentium.
        </p>
      </div>

      <div className="btn-group">
        <button className="btn res rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500">
          Download my Resume
        </button>
      </div>

      <div className="section_divider"></div>
    </section>
  );
};

export default Hero;

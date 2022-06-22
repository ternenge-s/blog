import React from 'react';

import './Technologies.less';

const Technologies = () => {
  return (
    <section id="tech" className="tech container">
      <h2 className="heading">Technologies</h2>
      <div className="div1">
        <div className="fend">
          <h4 className="mb-3 text-xl">front end</h4>

          <p>ReactJs</p>
          <p>Svelte</p>
          <p>Redux</p>
          <p>scss & less</p>
          <p>Tailwindcss</p>
        </div>
        <div className="apis">
          <h4 className="mb-3 text-xl">Apis</h4>

          <p>Postgresql</p>
          <p>Mongodb</p>
          <p>Sanity Studio</p>
        </div>
        <div className="bend">
          <h4 className="mb-5 text-xl">back end</h4>
          <p>NodeJs</p>
          <p>ExpressJs</p>
        </div>
      </div>
      <div className="section_divider"></div>
    </section>
  );
};

export default Technologies;

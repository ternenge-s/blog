import React from 'react';

import './Technologies.less';

const Technologies = () => {
  return (
    <section id="tech" className="tech text-white">
      <h2 className="text-sky-500 mb-3">Technologies</h2>
      <div className="div1">
        <div className="fend">
          <h4 className="mb-3 text-xl">front end</h4>

          <p>ReactJs</p>
          <p>NextJs</p>
          <p>Svelte</p>
          <p>SvelteKit</p>
          <p>Redux</p>
        </div>
        <div className="styling">
          <h4 className="mb-3 text-xl">Styling</h4>

          <p>Bootstrap</p>
          <p>Tailwindcss</p>
          <p>Scss</p>
          <p>Less</p>
          <p>Css</p>
        </div>
        <div className="bend">
          <h4 className="mb-5 text-xl">back end</h4>
          <p>NodeJs</p>
          <p>ExpressJs</p>
          <p>Postgressql</p>
          <p>Sanity Studio</p>
        </div>
      </div>
      <div className="section_divider"></div>
    </section>
  );
};

export default Technologies;

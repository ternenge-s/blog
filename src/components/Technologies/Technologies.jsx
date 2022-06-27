import React, { useState } from 'react';
import { useEffect } from 'react';
import { client } from '../../studio';

import './Technologies.less';

const Technologies = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type== "techs"]`)
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <section id="tech" className="tech container">
      <h2 className="heading">Technologies</h2>
      <div className="div1">
        {data.map((item) => {
          if (item.category == 'front end') {
            return (
              <div className="fend">
                <h4 className="mb-3 text-xl">Front end</h4>
                <p> {item.name}</p>
              </div>
            );
          }

          if (item.category == 'apis') {
            return (
              <div className="apis">
                <h4 className="mb-3 text-xl">Apis</h4>
              </div>
            );
          }
          if (item.category == 'back end') {
            return (
              <div className="back end">
                <h4 className="mb-3 text-xl">Back end</h4>
              </div>
            );
          }
        })}
      </div>
      <div className="section_divider"></div>
    </section>
  );
};

export default Technologies;

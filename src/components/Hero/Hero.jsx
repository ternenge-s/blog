import React, { useState } from 'react';

import './Hero.less';
import { client } from '../../studio';
import { useEffect } from 'react';

//
//
const Hero = () => {
  //
  const [data, setData] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type == "heroContent"]`)
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //
  //

  console.log(data);
  return (
    <section id="hero" className="hero container text-white">
      <div className="head">
        <h1>Hello dear,</h1>
        <h1>wellcome to my portolio</h1>
      </div>

      {data.map((item) => {
        return (
          <div key={item._id}>
            <div className="objective-note">
              <p>{item.intro}</p>
            </div>
            <div className="btn-group">
              <a
                href=""
                download="ternenge.resume"
                className="btn res rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500"
              >
                download my resumes
              </a>
            </div>
          </div>
        );
      })}

      <div className="section_divider"></div>
    </section>
  );
};

export default Hero;

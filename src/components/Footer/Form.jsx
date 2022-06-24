import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Form = () => {
  // state management
  //
  //state management for inputs
  //
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  //state management for submition message
  //
  //
  const [message, setMessage] = useState({
    status: false,
    success: true,
  });

  // state management for users data
  //
  //default is false
  //
  const [saveData, setSaveData] = useState(false);

  // methods
  //
  //
  //
  //control Input change
  //

  function HandleInput(e) {
    e.preventDefault();
    //update input values
    setInput((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  }

  // handle form submition
  //

  function HandleSubmit(e) {
    e.preventDefault();
    saveData
      ? localStorage.setItem(
          'userData',
          JSON.stringify({ name: input.name, email: input.email }),
        )
      : '';
    let route = `${
      location.protocol + '//' + location.hostname + '/3001/api/mail'
    }`;
    axios
      .post(route, input)
      .then(() => {
        setMessage({ status: true, success: true });
        setInput(() => {
          message: '';
        });
      })
      .catch(() => {
        setMessage({ status: true, success: false });
      });

    // clear message
    setTimeout(() => {
      setMessage({
        status: false,
        success: true,
      });
    }, 3000);
  }

  // check is user has already existing
  // and fetch if true from localStorage
  //when the document loads
  useEffect(() => {
    let UD = localStorage.getItem('userData');
    if (UD) {
      let PUD = JSON.parse(UD);

      let { name, email } = PUD;
      setInput((state) => {
        return { ...state, name, email };
      });
    }
  }, []);

  //return jsx
  //
  //

  return (
    <form onSubmit={(e) => HandleSubmit(e)} className="form">
      <div className="input">
        <input
          type="text"
          value={input.name}
          name="name"
          id="name"
          placeholder="your name"
          required
          onChange={(e) => HandleInput(e)}
        />

        <input
          type="email"
          value={input.email}
          name="email"
          id="email"
          placeholder="your email"
          required
          onChange={(e) => HandleInput(e)}
        />

        <textarea
          type="text"
          value={input.message}
          name="message"
          id="message"
          placeholder="message"
          required
          onChange={(e) => HandleInput(e)}
        />
      </div>

      {message.status && (
        <div
          className={`response-message ${
            message.success ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {message.success ? (
            <div className="success text-bold">
              <p>message delivered</p>
            </div>
          ) : (
            <div className="failed text-bold">
              <p>Something went wrong</p>
            </div>
          )}
        </div>
      )}
      <div className="flex items-center justify-between">
        <button className="btn submit" type="submit">
          send
        </button>

        <div className="flex items-center justify-evenly w-1/2">
          <input
            type="checkbox"
            checked={saveData}
            onChange={(e) => setSaveData(e.target.checked)}
            name="save_user"
          />
          <span>save my data</span>
        </div>
      </div>
    </form>
  );
};

export default Form;

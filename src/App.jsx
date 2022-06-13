import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [text, setText] = useState('');

  function HandleInput(e) {
    value = e.target.value
  }

  return (
    <div className="App">
      <h1>Hello, {props.name}</h1>
      <input
        type="text"
        value={text}
        placeholder="Type here"
        onChange={(e)=>setText(e.target.value)}
      />
      <p><strong>your entry is:</strong>{text}</p>
    </div>
  );
}

export default App;

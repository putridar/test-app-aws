import logo from './logo.svg';
import './App.css';

import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  const[value, setValue] = useState('');
  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    alert('A name was submitted: ' + value);
    event.preventDefault();
    navigate("/expenses", { state:{name: value }});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/expenses" state={{name: value, params2:'params2'}}>Expenses</Link>
      </nav>
      <Outlet />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {value}
      </header>
      
    </div>
  );
}




export default App;

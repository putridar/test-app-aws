import React, { Component } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Expenses() {
  
  
  // componentDidMount(){
  //   const {name} = this.props.match.params.name
  //   this.setState({name: name})
  // }
    const location = useLocation()
    const {name} = location.state
    const {params2} = location.state
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Expenses</h2>
        <div>{name}</div>
        <div>{params2}</div>
      </main>
    );
  }


  export default Expenses;
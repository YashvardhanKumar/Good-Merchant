import logo from '../../logo.svg';
import './App.css';
import Navbar from '../navbar/navbar';
import Background from '../background/background';
import CardView from '../cardview/cardview';
import React from 'react'

function App() {
  return (
    <div className='container' id='container'>
      <CardView />
      <Navbar />
      <Background />
    </div>
  );
}

export default App;

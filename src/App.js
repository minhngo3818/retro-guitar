import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntroBanner from './components/IntroBanner';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <IntroBanner/>
      <Footer/>
    </div>
  );
}

export default App;

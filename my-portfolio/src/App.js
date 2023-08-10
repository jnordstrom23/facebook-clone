import './App.css';
import Header from "./Header"
import Home from './Home';
import React from 'react';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;

import React from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import ContactUs from './components/ContactUs';
import Chatbox from './components/Chatbox';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <Chatbox/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/register" />} />
        <Route path="/contactus" element={<ContactUs to="/contuctus" />} />
        <Route path="/projects" element={<Projects to="/projects" />} />
        <Route path="/about" element={<About to="/about" />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
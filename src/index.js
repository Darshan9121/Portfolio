import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from "./components/Footer";
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import Social from './components/Social';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar/>
    <BrowserRouter>
        <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="*" element={<p>Eroor</p>}/>
        <Route path="" element={<Home/>}/>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/Portfolio" element={<Home/>}/>
        <Route  path="/Home" element={<Home/>}/>
        <Route path='/Projects' element={<Projects/>}/> 
        <Route path='/Contact' element={<Contact/>}/> 
        <Route path='/Skills' element={<Skills/>}/> 
        <Route path='/Follow' element={<Social/>}/> 
    </Routes>
</BrowserRouter>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

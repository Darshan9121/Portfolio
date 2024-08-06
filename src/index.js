import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Social from './components/Social';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Social/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

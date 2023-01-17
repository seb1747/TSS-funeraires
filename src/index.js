import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/Header';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element = {<Home/>}/>
  </Routes>
  <Footer/>
 </BrowserRouter>,
 
 );


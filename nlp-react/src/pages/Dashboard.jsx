import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';

const DashBoard = () => (
  <div className='bg-light text-dark' style={{display: 'flex', flexDirection: 'column', height: '94vh'}}>
    <Navbar/>
    <MainContent/>

    <Footer/>
  </div>
);

export default DashBoard;
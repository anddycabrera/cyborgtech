import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DashBoard = () => (
  <div className='bg-light text-dark' style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
    <Navbar/>
    <Outlet />
    <Footer />
  </div>
);

export default DashBoard;

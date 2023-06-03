import React from 'react';
import Header from '../components/Heder';
import FooterComponent from '../components/FooterComponent';
import Waitlist from '../components/Waitlist';


function WaitlistPage() {
  return (
    <>
    <Header/>
    <Waitlist/>
    <div class="b-example-divider"></div>
    <FooterComponent/>
   </>
  );
}

export default WaitlistPage;
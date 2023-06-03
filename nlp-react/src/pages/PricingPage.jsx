import React from 'react';
import Header from '../components/Heder';
import FooterComponent from '../components/FooterComponent';
import PricingSection from '../components/prices';


function PricingPage() {
  return (
    <>
    <Header/>

    <PricingSection/>

    <div class="b-example-divider"></div>
    <FooterComponent/>
   </>
  );
}

export default PricingPage;


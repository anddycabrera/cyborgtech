import React from 'react';
import Header from '../components/Heder';
import FooterComponent from '../components/FooterComponent';
import TermsOfService from '../components/TermsOfService';


function TermsOfServicePage() {
  return (
    <>
    <Header/>
    <TermsOfService/>
    <div class="b-example-divider"></div>
    <FooterComponent/>
   </>
  );
}

export default TermsOfServicePage;
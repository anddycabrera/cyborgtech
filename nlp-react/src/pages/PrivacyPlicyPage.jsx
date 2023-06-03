import React from 'react';
import Header from '../components/Heder';
import FooterComponent from '../components/FooterComponent';
import PrivacyPolicy from '../components/PrivacyPolicy';


function PrivacyPlicyPage() {
  return (
    <>
    <Header/>
    <PrivacyPolicy/>
    <div class="b-example-divider"></div>
    <FooterComponent/>
   </>
  );
}

export default PrivacyPlicyPage;
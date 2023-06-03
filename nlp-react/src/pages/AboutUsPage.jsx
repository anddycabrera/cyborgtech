import React from 'react';
import Header from '../components/Heder';
import FooterComponent from '../components/FooterComponent';
import AboutUsSection from '../components/AboutUsSection';


function AboutUsPage() {
  return (
    <>
    <Header/>

    <AboutUsSection/>

    <div class="b-example-divider"></div>
    <FooterComponent/>
   </>
  );
}

export default AboutUsPage;

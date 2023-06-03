import React from 'react';
import Header from '../components/Heder';
import FooterComponent from '../components/FooterComponent';
import ContactUsSection from '../components/ContactUsSection';


function ContactForm() {
  return (
    <>
    <Header/>
    <ContactUsSection/>
    <div class="b-example-divider"></div>
    <FooterComponent/>
   </>
  );
}

export default ContactForm;

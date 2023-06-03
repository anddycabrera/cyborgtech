import React from 'react';
import Header from '../components/Heder';
import Hero from '../components/Hero';
import FeaturesList from '../components/Feature';
import PricingSection from '../components/prices';
import FooterComponent from '../components/FooterComponent';
import features from '../data/featuresData'

const featuresData = features;


function HomePage() {
  return (
    <>
    <Header activeClass="text-secondary"/>
    <Hero/>
    <div class="b-example-divider"></div>
    <FeaturesList features={featuresData} />
    <div class="b-example-divider"></div>
    <PricingSection/>
    <div class="b-example-divider"></div>
    <FooterComponent/>
   </>
  );
}

export default HomePage;


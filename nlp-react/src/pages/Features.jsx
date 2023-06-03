import React from 'react';
import Header from '../components/Heder';
import FeaturesList from '../components/Feature';
import FooterComponent from '../components/FooterComponent';
import features from '../data/featuresData'

const featuresData = features;

function Features() {
  return (
    <>
    <Header/>
    <FeaturesList features={featuresData} />   
    <div class="b-example-divider"></div>
    <FooterComponent/>
   </>
  );
}

export default Features;


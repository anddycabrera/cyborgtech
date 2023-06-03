import React from 'react';
import Header from '../components/Heder';
import FeaturesList from '../components/Feature';
import FooterComponent from '../components/FooterComponent';

const features = [
  { 
    icon: 'SVGRepo_tracerCarrier', 
    title: 'Text Analysis', 
    text: 'Uncover insights and patterns in text data using advanced Natural Language Processing (NLP) techniques.', 
    cta: 'Explore Text Analysis' 
  },
  { 
    icon: 'SVGRepo_question', 
    title: 'Table Question Answering', 
    text: 'Extract precise information from tabular data in response to specific queries.', 
    cta: 'Explore Table Question Answering' 
  },
  { 
    icon: 'toggles2', 
    title: 'Translation and Summarization', 
    text: 'Bridge language barriers and condense lengthy texts to succinct summaries.', 
    cta: 'Explore Translation and Summarization' 
  },
  { 
    icon: 'toggles2', 
    title: 'Text Generation', 
    text: 'Generate human-like text for a wide range of applications, from creative writing to automated responses.', 
    cta: 'Explore Text Generation' 
  },
  { 
    icon: 'people-circle', 
    title: 'Conversational AI', 
    text: 'Engage users with dynamic and intuitive AI-powered chatbots, capable of understanding and responding to natural language inputs.', 
    cta: 'Explore Conversational AI' 
  },
];


function Features() {
  return (
    <>
    <Header/>
    <FeaturesList features={features} />   
    <div class="b-example-divider"></div>
    <FooterComponent/>
   </>
  );
}

export default Features;


import React from 'react';
import '../css/sticky-footer-navbar.css'
import Analysis from './Analysis';
import SandboxHeader from './SandboxHeader';
import Summarization from './Summarization';

const HUGGINGFACE_API = 'https://api-inference.huggingface.co/models/';

function TranslationSummarization() {
  return (
    <main className="container">
      <SandboxHeader/>
      
      <Summarization huggingFaceApi={HUGGINGFACE_API+'facebook/bart-large-cnn'} title={'Summarization Model:'} description={"A powerful tool for sales teams, condensing information, improving communication, and facilitating informed decision-making, ultimately boosting productivity and success."}/>
    </main>
  );
}

export default TranslationSummarization;
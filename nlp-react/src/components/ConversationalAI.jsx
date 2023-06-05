import React from 'react';
import '../css/sticky-footer-navbar.css'
import Analysis from './Analysis';
import SandboxHeader from './SandboxHeader';
import ConversationalDialoGPT4 from './ConversationalDialoGPT4';

const HUGGINGFACE_API = 'https://api-inference.huggingface.co/models/';

function ConversationalAI() {
  return (
    <main className="container">
      <SandboxHeader/>
      <ConversationalDialoGPT4 huggingFaceApi={HUGGINGFACE_API+'ingen51/DialoGPT-medium-GPT4'} title={'Conversational Model:'} description={"Conversational models provide automated, 24/7 customer service, enhancing customer experience and reducing business costs."}/>

    </main>
  );
}

export default ConversationalAI;


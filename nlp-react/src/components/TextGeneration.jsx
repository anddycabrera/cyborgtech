import React from 'react';
import SandboxHeader from './SandboxHeader';
import TextGenerationGPT2 from './TextGenerationGPT2';

const HUGGINGFACE_API = 'https://api-inference.huggingface.co/models/';

function TextGeneration() {
  return (
    <main className="container">
      <SandboxHeader/>
     <TextGenerationGPT2 huggingFaceApi={HUGGINGFACE_API+'gpt2-large'} title={'Text Generator Model:'} description={"Text generation can automate content creation, personalize customer interactions, streamline responses to customer queries, and assist in data analysis by generating descriptive summaries of complex data sets. Risks, Limitations and Biases. CONTENT WARNING: Readers should be aware this section contains content that is disturbing, offensive, and can propogate historical and current stereotypes."}/>
    </main>
  );
}

export default TextGeneration;
import React from 'react';
import '../css/sticky-footer-navbar.css'
import Analysis from './Analysis';
import SandboxHeader from './SandboxHeader';

const HUGGINGFACE_API = 'https://api-inference.huggingface.co/models/';

function MainContent() {
  return (
    <main className="container">
      <SandboxHeader/>
      <Analysis huggingFaceApi={HUGGINGFACE_API+'siebert/sentiment-roberta-large-english'} title={'SiEBERT - English-Language Sentiment Classification'} description={'Liu et al. 2019 - It enables reliable binary sentiment analysis for various types of English-language text. For each instance, it predicts either positive (1) or negative (0) sentiment.'}/>

      {/* <AnalysisTopic huggingFaceApi={HUGGINGFACE_API+'cardiffnlp/tweet-topic-21-multi'} title={'tweet-topic-21-multi'} description={'This model is based on a TimeLMs language model trained on ~124M tweets from January 2018 to December 2021 (see here), and finetuned for multi-label topic classification on a corpus of 11,267 tweets. This model is suitable for English.'}/> */}
    </main>
  );
}

export default MainContent;

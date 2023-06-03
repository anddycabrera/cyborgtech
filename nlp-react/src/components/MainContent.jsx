import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sticky-footer-navbar.css'
import Analysis from './Analysis';
import AnalysisTopic from './AnalysisTopic';

const HUGGINGFACE_API = 'https://api-inference.huggingface.co/models/';

function MainContent() {
  return (
    <main className="container">
      <header>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">NLP Sandbox</h1>
          <p className="fs-5 text-muted">Discover the power of Natural Language Processing with our NLP Sandbox</p>
          <p>"High user traffic may cause server issues. If you face an error, kindly retry."</p>
        </div>
      </header>

      <Analysis huggingFaceApi={HUGGINGFACE_API+'siebert/sentiment-roberta-large-english'} title={'SiEBERT - English-Language Sentiment Classification'} description={'Liu et al. 2019 - It enables reliable binary sentiment analysis for various types of English-language text. For each instance, it predicts either positive (1) or negative (0) sentiment.'}/>

      {/* <AnalysisTopic huggingFaceApi={HUGGINGFACE_API+'cardiffnlp/tweet-topic-21-multi'} title={'tweet-topic-21-multi'} description={'This model is based on a TimeLMs language model trained on ~124M tweets from January 2018 to December 2021 (see here), and finetuned for multi-label topic classification on a corpus of 11,267 tweets. This model is suitable for English.'}/> */}
    </main>
  );
}

export default MainContent;

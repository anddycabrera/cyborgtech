import React from 'react';
import '../css/sticky-footer-navbar.css'
import Analysis from './Analysis';
import SandboxHeader from './SandboxHeader';

const HUGGINGFACE_API = 'https://api-inference.huggingface.co/models/';

function MainContent() {
  return (
    <main className="container">
      <SandboxHeader/>
      <Analysis huggingFaceApi={HUGGINGFACE_API+'siebert/sentiment-roberta-large-english'} title={'Sentiment Classification:'} description={"Sentiment Classification automates understanding of customer feedback, identifies improvement areas, offers real-time market insights, and drives targeted sales strategies and marketing efforts, enhancing customer relations and maximizing business potential."}/>

      {/* <AnalysisTopic huggingFaceApi={HUGGINGFACE_API+'cardiffnlp/tweet-topic-21-multi'} title={'tweet-topic-21-multi'} description={'This model is based on a TimeLMs language model trained on ~124M tweets from January 2018 to December 2021 (see here), and finetuned for multi-label topic classification on a corpus of 11,267 tweets. This model is suitable for English.'}/> */}
    </main>
  );
}

export default MainContent;

import React from 'react';
import '../css/sticky-footer-navbar.css'
import Analysis from './Analysis';
import SandboxHeader from './SandboxHeader';

const HUGGINGFACE_API = 'https://api-inference.huggingface.co/models/';

function MainContent() {
  return (
    <main className="container">
      <SandboxHeader/>
      <Analysis huggingFaceApi={HUGGINGFACE_API+'siebert/sentiment-roberta-large-english'} title={'Sentiment Classification:'} description={"Sentiment Classification is a powerful tool that can enhance a company's understanding of their customer feedback and market trends. With it, businesses can automatically categorize customer opinions into positive, negative, or neutral sentiments, helping them swiftly identify areas needing improvement and customer pain points. Moreover, it offers real-time market insights by gauging public sentiment towards products, services, or brand image. This valuable data can drive more targeted sales strategies, tailored marketing efforts, and improved customer relations. The integration of Sentiment Classification is an investment in understanding your customer base and maximizing business potential."}/>

      {/* <AnalysisTopic huggingFaceApi={HUGGINGFACE_API+'cardiffnlp/tweet-topic-21-multi'} title={'tweet-topic-21-multi'} description={'This model is based on a TimeLMs language model trained on ~124M tweets from January 2018 to December 2021 (see here), and finetuned for multi-label topic classification on a corpus of 11,267 tweets. This model is suitable for English.'}/> */}
    </main>
  );
}

export default MainContent;

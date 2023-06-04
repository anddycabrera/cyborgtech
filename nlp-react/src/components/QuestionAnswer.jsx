import React from 'react';
import '../css/sticky-footer-navbar.css'
import SandboxHeader from './SandboxHeader';
import QuestionAnswerContext from './QuestionAnswerContext';

const HUGGINGFACE_API = 'https://api-inference.huggingface.co/models/';

function QuestionAnswer() {
  return (
    <main className="container">
      <SandboxHeader/>

      <QuestionAnswerContext huggingFaceApi={HUGGINGFACE_API+'deepset/roberta-base-squad2'} title={'Question Answering (QA) models: '} description={"Leveraging Question Answering (QA) models can boost your company's operational efficiency and customer satisfaction. By automating customer support and managing knowledge, QA models save time and resources while ensuring customers receive immediate, accurate responses. In addition, their ability to analyze market data provides essential insights that can drive sales and increase competitive advantage. With QA models, you're investing in better customer relations, efficient decision-making, and a data-driven sales strategy."}/>

    </main>
  );
}

export default QuestionAnswer;
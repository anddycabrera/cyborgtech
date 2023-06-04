import React from 'react';
import '../css/sticky-footer-navbar.css'
import SandboxHeader from './SandboxHeader';
import QuestionAnswerContext from './QuestionAnswerContext';

const HUGGINGFACE_API = 'https://api-inference.huggingface.co/models/';

function QuestionAnswer() {
  return (
    <main className="container">
      <SandboxHeader/>

      <QuestionAnswerContext huggingFaceApi={HUGGINGFACE_API+'deepset/roberta-base-squad2'} title={'Question Answering (QA) models: '} description={"Question Answering (QA) models can automate customer support, improve efficiency, provide instant accurate responses to customers, analyze market data for insights, and enhance decision-making, leading to improved customer relations and a data-driven sales strategy."}/>

    </main>
  );
}

export default QuestionAnswer;
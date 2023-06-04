import React from 'react';
import '../css/sticky-footer-navbar.css'
import SandboxHeader from './SandboxHeader';
import QuestionAnswerContext from './QuestionAnswerContext';

const HUGGINGFACE_API = 'https://api-inference.huggingface.co/models/';

function QuestionAnswer() {
  return (
    <main className="container">
      <SandboxHeader/>

      <QuestionAnswerContext huggingFaceApi={HUGGINGFACE_API+'deepset/roberta-base-squad2'} title={'QA Model: '} description={'Question Answering models can retrieve the answer to a question from a given text, which is useful for searching for an answer in a document. Some question answering models can generate answers without context!'}/>

    </main>
  );
}

export default QuestionAnswer;
import React, { useState } from 'react';
import axios from 'axios';

const BEARER_TOKEN = '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';

const AnalysisPage = ({ huggingFaceApi, title, description }) => {
  const [text, setText] = useState('');
  const [taskResult, setTaskResult] = useState(null);
  const [error, setError] = useState(null);
  const [clearAll, setClearAll] = useState(false);

  const submitTextForAnalysis = async () => {
    if (text) {
      try {
        const response = await axios.post(huggingFaceApi, { inputs: text }, {
          headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
        });

        // Assuming the response.data has nested array structure like [[{"label": "sports", "score": 0.975}, {"label": "news_&_social_concern", "score": 0.966}, ...]]
        const nestedScores = response.data[0].map(val => ({...val, score: 1 / (1 + Math.exp(-val.score))})); // apply expit to the scores
        const predictions = nestedScores.filter(val => val.score >= 0.5); // apply threshold
        setTaskResult(predictions);
        setError(null);
      } catch (error) {
        setError('Our sentiment analysis service is currently busy. We apologize for the inconvenience. Please try again later.');
      }
    }
  };

  const handleClearAll = () => {
    setText('');
    setTaskResult(null);
    setError(null);
    setClearAll(true);
  };

  if (clearAll) {
    setText('');
    setTaskResult(null);
    setError(null);
    setClearAll(false);
  }

  return (
    <>
      <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
        <div className="lh-1">
          <h1 className="h6 mb-0 text-white lh-1">{title}</h1>
          <small>{description}</small>
        </div>
      </div>
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0">Enter Text for Sentiment Analysis</h6>

        {error && <p className="alert alert-danger">{error}</p>}

        <div className="mb-3 pt-3">
          <textarea
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ width: '100%' }}
            rows="5"
          />
        </div>

        <div className="mb-3 text-end">
          <button className="btn btn-primary" onClick={submitTextForAnalysis} disabled={!text}>
            Classify Text
          </button>
        </div>

        {taskResult && (
          taskResult.map((result, index) => {
            return (
              <div className="d-flex text-muted pt-3" key={index}>
                <strong className="d-block text-gray-dark">@{result.label}</strong>
                <p>
                  Score: {result.score.toFixed(3)}
                </p>
              </div>
            );
          })
        )}

        <small className="d-block text-end mt-3">
          <a href="#" onClick={handleClearAll}>Clear all</a>
        </small>
      </div>
    </>
  );
};

export default AnalysisPage;

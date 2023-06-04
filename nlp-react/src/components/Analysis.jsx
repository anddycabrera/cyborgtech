import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;

const AnalysisPage = ({ huggingFaceApi, title, description }) => {
  const [text, setText] = useState('I love the MyStarlog models. It provides very insightful results.');
  const [taskResult, setTaskResult] = useState(null);
  const [error, setError] = useState(null);
  const [clearAll, setClearAll] = useState(false);

  useEffect(() => {
    // Automatically run analysis when the component is first loaded
    submitTextForAnalysis();
  }, []);

  const submitTextForAnalysis = async () => {
    if (text) {
      try {
        console.log(process.env.REACT_APP_BEARER_TOKEN);
        const response = await axios.post(huggingFaceApi, { inputs: text }, {
          headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
        });
        setTaskResult(response.data);
        setError(null);
      } catch (error) {
        setError('Our sentiment analysis service is currently busy. We apologize for the inconvenience. Please try again later.');
      }
    }
  };

  const highestScoreResult = taskResult ? taskResult[0].reduce((prev, current) => (prev.score > current.score) ? prev : current) : null;

  const labelStyle = highestScoreResult ? {
    color: highestScoreResult.label === 'POSITIVE' ? 'green' : 'red',
    fontWeight: 'bold',
  } : {};

  // Event handler for "Clear all" link
  const handleClearAll = () => {
    setText('');
    setTaskResult(null);
    setError(null);
    setClearAll(true);
  };

  // Clear all texts and results when clearAll state is set to true
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

        {highestScoreResult && (
          <div className="d-flex text-muted pt-3">
            <svg
              className="bd-placeholder-img flex-shrink-0 me-2 rounded"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 32x32"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#007bff" />
              <text x="50%" y="50%" fill="#007bff" dy=".3em">
                32x32
              </text>
            </svg>

            <p className="pb-3 mb-0 small lh-sm border-bottom">
              <strong className="d-block text-gray-dark">@results</strong>
              <p>
                Result: <span style={labelStyle}>{highestScoreResult.label}</span> with score of{' '}
                {(highestScoreResult.score * 100).toFixed(1)}%
              </p>
            </p>
          </div>
        )}

        <small className="d-block text-end mt-3">
          <a href="#" onClick={handleClearAll}>Clear all</a>
        </small>
      </div>
    </>
  );
};

export default AnalysisPage;

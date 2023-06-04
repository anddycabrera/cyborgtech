import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;
const TIMEOUT = 5000;

const QuestionAnswerContext = ({ huggingFaceApi, title, description }) => {
  const [question, setQuestion] = useState('What is the method of administration of remdesivir?');
  const [context, setContext] = useState('Remdesivir is an antiviral medication developed by the biopharmaceutical company Gilead Sciences. It is administered via injection into a vein. As of 2021, remdesivir is approved or authorized for emergency use to treat COVID-19 in around 50 countries. Preliminary data have shown that remdesivir was superior to placebo in shortening the time to recovery in adults who were hospitalized with COVID-19 and had evidence of lower respiratory tract infection.');
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(null);
  const [error, setError] = useState(null);
  const [clearAll, setClearAll] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    query();
  }, []);

  const query = async () => {
    if (question && context) {
      setLoading(true);
      try {
        const source = axios.CancelToken.source();
        setTimeout(() => {
          source.cancel('Operation timed out.');
        }, TIMEOUT);

        const response = await axios.post(
          huggingFaceApi,
          { "inputs": { "question": question, "context": context } },
          {
            headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
            cancelToken: source.token,
          }
        );
        setAnswer(response.data.answer);
        setScore(response.data.score);
        setError(null);
      } catch (error) {
        if (axios.isCancel(error)) {
          setError('The operation timed out. Please try again.');
        } else {
          setError('Our Q&A service is currently busy. We apologize for the inconvenience. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClearAll = () => {
    setQuestion('');
    setContext('');
    setAnswer(null);
    setScore(null);
    setError(null);
    setClearAll(true);
  };

  if (clearAll) {
    setQuestion('');
    setContext('');
    setAnswer(null);
    setScore(null);
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
        <h6 className="border-bottom pb-2 mb-0">Enter Question and Context for Analysis</h6>

        {error && <p className="alert alert-danger">{error}</p>}

        <div className="mb-3 pt-3">
          <label>Question</label>
          <input 
            type="text" 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)} 
            placeholder="Enter your question here"
            className="form-control mb-3"
            style={{ width: '100%' }}
          />

          <label>Context</label>
          <textarea
            className="form-control"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Enter the context here"
            style={{ width: '100%' }}
            rows="5"
          />
        </div>

        <div className="mb-3 text-end">
          <button className="btn btn-primary" onClick={query} disabled={!question || !context || loading}>
            {loading ? 'Loading...' : 'Analyze Question'}
          </button>
        </div>

        {answer && (
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

            <div className="pb-3 mb-0 lh-sm border-bottom">
              <div className="alert alert-warning">
                <strong className="d-block text-gray-dark">@results</strong>
                <p className="text-success">
                 Answer:  <strong>{answer}</strong><br />
                  Score: <strong>{score.toFixed(3)}</strong>
                </p>
              </div>
            </div>
          </div>
        )}

        <small className="d-block text-end mt-3">
          <a href="#" onClick={handleClearAll}>Clear all</a>
        </small>
      </div>
    </>
  );
};

export default QuestionAnswerContext;

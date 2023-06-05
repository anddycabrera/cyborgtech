import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;
const TIMEOUT = 20000;

const TextGenerationGPT2 = ({ huggingFaceApi, title, description }) => {
  const [inputText, setInputText] = useState('My name is Mike and I am');
  const [submittedText, setSubmittedText] = useState(inputText);
  const [taskResult, setTaskResult] = useState(null);
  const [displayedResult, setDisplayedResult] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const typingSimulationRef = useRef(null);

  useEffect(() => {
    submitTextForAnalysis(submittedText);
  }, [submittedText]);

  useEffect(() => {
    let typingIndex = 0;
    if (typingSimulationRef.current) {
      clearInterval(typingSimulationRef.current);
    }

    if (taskResult && taskResult.length > 0) {
      let trimmedResult = taskResult.trimStart(); // Remove leading spaces
      setDisplayedResult(' ' + trimmedResult[0]); // start with the first character of taskResult
      typingSimulationRef.current = setInterval(() => {
        typingIndex++;
        if (typingIndex < trimmedResult.length) {
          setDisplayedResult((displayedResult) => displayedResult + trimmedResult[typingIndex]);
        } else {
          clearInterval(typingSimulationRef.current);
        }
      }, 10); // Set speed of typing here
    } else {
      setDisplayedResult('');
    }
  }, [taskResult]);

  const submitTextForAnalysis = async (textToSubmit) => {
    if (textToSubmit) {
      setLoading(true);
      setDisplayedResult('');
      try {
        const source = axios.CancelToken.source();
        setTimeout(() => {
          source.cancel('Operation timed out.');
        }, TIMEOUT);

        const response = await axios.post(
          huggingFaceApi,
          { inputs: textToSubmit.trim() },
          {
            headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
            cancelToken: source.token,
          }
        );
        const generatedText = response.data[0].generated_text;
        const promptLength = textToSubmit.trim().length + 1;
        setTaskResult(generatedText.slice(promptLength));
        setError(null);
      } catch (error) {
        if (axios.isCancel(error)) {
          setError('The operation timed out. Please try again.');
        } else {
          setError('Our NLP Model service is currently busy. We apologize for the inconvenience. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const handleGenerateTextClick = () => {
    setSubmittedText(inputText);
  };

  const handleClearAll = () => {
    setInputText('');
    setTaskResult(null);
    setError(null);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
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

        <div className="mb-3">
          <textarea 
            onChange={handleInputChange}
            className="form-control" 
            value={inputText} 
            style={{ width: '100%' }} 
            rows="5" 
          />
        </div>

        <div className="mb-3 text-end">
          <button className="btn btn-primary" onClick={handleGenerateTextClick} disabled={!inputText || loading}>
            {loading ? 'Loading...' : 'Generate Text'}
          </button>
        </div>

        {taskResult && (
          <div className="mb-3">
            <div 
              contentEditable={false} 
              className="form-control" 
              style={{ width: '100%', minHeight: '100px', whiteSpace: 'pre-wrap' }}
            >
              <span style={{color: 'black'}}>{submittedText}</span>
              <span style={{color: 'blue'}}>{displayedResult}</span>
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

export default TextGenerationGPT2;

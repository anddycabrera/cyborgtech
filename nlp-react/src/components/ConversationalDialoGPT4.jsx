import React, { useState } from 'react';
import axios from 'axios';

const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;
const TIMEOUT = 20000;

const ConversationalDialoGPT4 = ({ huggingFaceApi, title, description }) => {
  const [inputText, setInputText] = useState('Can you suggest a good book based on my interests in science fiction and fantasy?');
  const [history, setHistory] = useState({
    past_user_inputs: [],
    generated_responses: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  }

  const handleSubmit = async () => {
    const data = {
      inputs: {
        past_user_inputs: history.past_user_inputs,
        generated_responses: history.generated_responses,
        text: inputText
      }
    }
  
    setLoading(true);
    setError(null);
    try {
      const source = axios.CancelToken.source();
      setTimeout(() => {
        source.cancel('Operation timed out.');
      }, TIMEOUT);
  
      const response = await axios.post(
        huggingFaceApi, 
        data, 
        {
          headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
          cancelToken: source.token,
        }
      );
  
      const result = response.data;
      setHistory(prevHistory => ({
        past_user_inputs: [...prevHistory.past_user_inputs, inputText],
        generated_responses: [...prevHistory.generated_responses, result.generated_text]
      }));
  
      setInputText('');
  
    } catch (error) {
      if (axios.isCancel(error)) {
        setError('The operation timed out. Please try again.');
      } else {
        if (error.response && error.response.data.error.toLowerCase().includes('currently loading')) {
          setError(`Service is currently loading, estimated time to complete: ${error.response.data.estimated_time} seconds.`);
        } else {
          setError('Our NLP Model service is currently busy. We apologize for the inconvenience. Please try again later.');
        }
      }
    } finally {
      setLoading(false);
    }
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
        <h6 className="border-bottom pb-2 mb-0">Enter Text for Conversation</h6>
        {error && <p className="alert alert-danger">{error}</p>}
        <div className="mb-3">
          {history.past_user_inputs.map((input, i) => (
            <div key={i}>
              <p>User: {input}</p>
              <p>Bot: {history.generated_responses[i]}</p>
            </div>
          ))}
        </div>
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
          <button className="btn btn-primary" onClick={handleSubmit} disabled={!inputText || loading}>
            {loading ? 'Loading...' : 'Send'}
          </button>
        </div>
      </div>
    </>
  );
};

export default ConversationalDialoGPT4;

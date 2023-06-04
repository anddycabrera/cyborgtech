import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;

const Summarization = ({ huggingFaceApi, title, description }) => {
  const [text, setText] = useState(`In today's highly competitive business landscape, sales teams face numerous challenges in effectively managing information overload, extracting key insights, and making informed decisions. That's where a summarization model comes in. This advanced tool utilizes cutting-edge natural language processing techniques to analyze and summarize large volumes of text, saving sales professionals valuable time and resources.

  With the help of a summarization model, sales teams can efficiently process extensive reports, market research, customer feedback, and industry articles. The model identifies the most relevant information, distills it into concise summaries, and presents it in an easily digestible format. This enables salespeople to quickly extract crucial insights, prioritize their efforts, and make data-driven decisions that drive sales growth.
  
  One of the significant advantages of a summarization model is its ability to improve communication. Sales professionals often need to convey complex information to clients and prospects, and doing so concisely and persuasively is crucial. By leveraging a summarization model, salespeople can generate concise summaries of product features, benefits, and value propositions. These summaries can be used in sales presentations, marketing collateral, or customer interactions, ensuring clear and effective communication that resonates with the target audience.
  
  Furthermore, a summarization model enables sales teams to stay up to date with industry trends, competitor analysis, and market insights. By summarizing relevant articles, research papers, and industry reports, the model provides sales professionals with timely and concise summaries of the latest developments. This knowledge empowers sales teams to engage in more informed conversations with prospects, identify emerging opportunities, and adapt their strategies accordingly.
  
  The implementation of a summarization model also fosters collaboration within sales organizations. By having access to summarized information, sales teams can easily share insights, updates, and best practices with their colleagues. This promotes knowledge sharing, enhances team productivity, and improves overall sales performance.
  
  In conclusion, a summarization model is an invaluable tool for sales teams. It saves time, improves communication, enables informed decision-making, and promotes collaboration. By leveraging this technology, sales professionals can efficiently navigate information overload, extract key insights, and ultimately drive sales success in today's competitive marketplace.`);
  
  const [summaryResult, setSummaryResult] = useState(null);
  const [error, setError] = useState(null);
  const [clearAll, setClearAll] = useState(false);

  useEffect(() => {
    submitTextForAnalysis();
  }, []);

  const submitTextForAnalysis = async () => {
    if (text) {
      try {
        const response = await axios.post(huggingFaceApi, { inputs: text }, {
          headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
        });
        setSummaryResult(response.data);
        setError(null);
      } catch (error) {
        setError('Our text summarization service is currently busy. We apologize for the inconvenience. Please try again later.');
      }
    }
  };

  // Event handler for "Clear all" link
  const handleClearAll = () => {
    setText('');
    setSummaryResult(null);
    setError(null);
    setClearAll(true);
  };

  // Clear all texts and results when clearAll state is set to true
  if (clearAll) {
    setText('');
    setSummaryResult(null);
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
        <h6 className="border-bottom pb-2 mb-0">Enter Text for Summarization</h6>

        {error && <p className="alert alert-danger">{error}</p>}

        <div className="mb-3 pt-3">
          <textarea
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ width: '100%' }}
            rows="10"
          />
        </div>

        <div className="mb-3 text-end">
          <button className="btn btn-primary" onClick={submitTextForAnalysis} disabled={!text}>
            Summarize Text
          </button>
        </div>

        {summaryResult && (
          <div className="d-flex text-muted pt-3">
             <div className="pb-3 mb-0 lh-sm border-bottom">
              <div className="alert alert-warning">
                <p className="pb-3 mb-0 lh-sm border-bottom">
                  <strong className="d-block text-gray-dark">@results</strong>
                  <p>
                  <strong className="d-block text-gray-dark">Summary:</strong> {summaryResult[0].summary_text}
                  </p>
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

export default Summarization;
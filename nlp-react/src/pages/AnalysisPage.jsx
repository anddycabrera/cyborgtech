import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_ADDRESS = 'https://mystarlog.com:8000'; // Change this to your production server address when necessary

const AnalysisPage = () => {
  const [text, setText] = useState('');
  const [taskId, setTaskId] = useState(null);
  const [taskStatus, setTaskStatus] = useState(null);
  const [taskResult, setTaskResult] = useState(null);

  const submitTextForAnalysis = async () => {
    const response = await axios.post(`${SERVER_ADDRESS}/api/v1/sentiment-analysis/sentiment-roberta-large-english`, { text });
    setTaskId(response.data.task_id);
    setTaskResult(null); // Clear last results
  };

  useEffect(() => {
    if (!taskId) {
      return;
    }

    const intervalId = setInterval(async () => {
      const response = await axios.get(`${SERVER_ADDRESS}/api/v1/sentiment-analysis/task-status/${taskId}`);
      setTaskStatus(response.data.task_status);

      if (response.data.task_status === 'SUCCESS') {
        setTaskResult(response.data.task_result);
        clearInterval(intervalId);
      }
    }, 1000);  // Check every second

    return () => clearInterval(intervalId);  // Cleanup on unmount
  }, [taskId]);

  return (
    <div>
      <h1>Text Analysis</h1>
      <textarea value={text} onChange={e => setText(e.target.value)} />
      <button onClick={submitTextForAnalysis}>Analyze</button>
      {taskStatus && <p>Status: {taskStatus}</p>}
      {taskResult && <p>Result: {JSON.stringify(taskResult)}</p>}
    </div>
  );
};

export default AnalysisPage;

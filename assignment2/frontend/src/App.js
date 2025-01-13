
import React, { useState } from "react";

const App = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <div>
      <h1>CDP Chatbot</h1>
      <textarea
        rows="4"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleAsk}>Ask</button>
      <p>{answer}</p>
    </div>
  );
};

export default App;

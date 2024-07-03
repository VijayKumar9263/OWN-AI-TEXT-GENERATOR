// src/TextGenerator.js
import React, { useState } from "react";
import axios from "axios";


const TextGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: inputText }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );
      setGeneratedText(response.data.choices[0].message.content);
    } catch (error) {
      console.error("Error generating text:", error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter Your Query" value={inputText} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Submit</button>
      <div>
        <h3 className="heading"> AI Response:</h3>
        <p>{generatedText}</p>
      </div>
    </div>
  );
};

export default TextGenerator;

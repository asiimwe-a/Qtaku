// import React from "react";

// const PromptHistory = () => {
//   return <div>PromptHistory</div>;
// };

// export default PromptHistory;

import React from "react";

const PromptHistory = () => {
  const promptHistory = [
    "Generate a random number between 1 and 10",
    "Create a recipe for a vegan lasagna",
    "Write a short story about a haunted house",
    // add more prompts here as desired
  ];

  return (
    <div>
      <h2>Prompt History</h2>
      <ul>
        {promptHistory.map((prompt, index) => (
          <li key={index}>{prompt}</li>
        ))}
      </ul>
    </div>
  );
};

export default PromptHistory;

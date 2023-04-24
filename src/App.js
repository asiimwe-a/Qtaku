import { useState } from "react";
import CreatePrompt from "./components/CreatePrompt";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Need to add book with", title);
  };

  return (
    <div className="dashboard-container">
      <div className="pane-1">{/* Add input for generating images here */}</div>
      <div className="pane-2">
        <ImageGenerator />
      </div>
      <div className="pane-3">{/* Add prompt history component here */}</div>
    </div>
  );
}

export default App;

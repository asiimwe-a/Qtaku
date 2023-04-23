import { useState } from "react";
import CreatePrompt from "./components/CreatePrompt";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Need to add book with", title);
  };

  return (
    <div>
      <CreatePrompt onCreate={createBook} />
    </div>
  );
}

export default App;

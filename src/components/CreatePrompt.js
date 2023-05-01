const CreatePrompt = ({ onCreate }) => {
  const [prompt, setPrompt] = useState("");

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleCreateClick = () => {
    onCreate(prompt);
  };

  return (
    <div>
      <input type="text" value={prompt} onChange={handlePromptChange} />
      <button onClick={handleCreateClick}>Create</button>
    </div>
  );
};

export default CreatePrompt;

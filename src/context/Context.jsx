import { createContext, useState } from "react";
import run from "../config/gemini";

const Context = createContext();

// Context provider component
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [darkMode, setDarkMode] = useState(false);  // New state for dark mode

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    const response = await run(prompt);  // Assuming `run` makes an API call
    setResultData(response);
    setLoading(false);
    setInput(""); 

    const botMessage = {
      id: Date.now() + 1,
      text: response,
      sender: "bot",
    };

    setPrevPrompts((prev) => [...prev, botMessage]);
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Context value to be shared across components
  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    darkMode,           // Exposing dark mode state
    toggleDarkMode,     // Exposing toggle function
  };

  // Return the context provider component that wraps children
  return (
    <Context.Provider value={contextValue}>
      <div className={darkMode ? 'dark' : ''}> {/* Apply dark mode if darkMode is true */}
        {props.children}
      </div>
    </Context.Provider>
  );
};

// Export Context and ContextProvider separately
export { Context, ContextProvider };

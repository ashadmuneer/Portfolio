import React, { useState, useEffect, useContext, useRef } from "react";
import { Context } from "../../context/Context"; // Replace with your actual context import

const Chatbot = () => {
  const {
    input,
    setInput,
    prevPrompts,
    setPrevPrompts,
    onSent,
    loading,
    darkMode,           
  } = useContext(Context);

  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const messagesEndRef = useRef(null);  // Reference for auto-scrolling

  // Initialize prevPrompts with a default welcome message
  useEffect(() => {
    if (prevPrompts.length === 0) {
      setPrevPrompts([
        {
          id: "welcome-msg",
          text: "Hello! How can I assist you today?",
          sender: "bot",
        },
      ]);
    }
  }, [prevPrompts, setPrevPrompts]);

  // Scroll to the bottom when a new message is added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [prevPrompts]);

  const toggleChatbox = () => {
    setIsChatboxOpen((prev) => !prev);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    // Add user message to previous prompts
    const userMessage = { id: Date.now(), text: input, sender: "user" };
    setPrevPrompts((prev) => [...prev, userMessage]);

    // Send the message to the context handler
    await onSent(input);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-[2.5rem] lg:bottom-0 right-0 mb-4 mr-4">
        <button
          onClick={toggleChatbox}
          className="p-0 border-none bg-transparent focus:outline-none hover:border-none focus:ring-0"
        >
          <img
            src="https://i.imgur.com/fgQkzgj.png" // Your image link
            alt="chatbot icon"
            className="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
          />
        </button>
      </div>

      {/* Chatbox UI */}
      {isChatboxOpen && (
        <div
          className={`fixed bottom-[8rem] lg:bottom-[6rem] right-4 w-[90%] max-w-sm sm:max-w-xs md:max-w-md lg:max-w-lg lg:right-4 xl:max-w-xl xl:right-4 ${darkMode ? 'dark' : ''}`}
          style={{ maxWidth: "400px" }}
        >
          <div className={`shadow-md rounded-lg w-full ${darkMode ? 'bg-[hsl(0,0%,20%)]' : 'bg-white'}`}>
            {/* Header */}
            <div
              className={`p-4 border-b ${darkMode ? 'bg-[hsl(0,0%,20%)]' : 'bg-[hsl(0,0%,20%)]'} text-white rounded-t-lg flex justify-between items-center`}
            >
              <div className="flex items-center space-x-2">
                <img
                  src="https://i.imgur.com/RcBPN8U.png"
                  alt=""
                  className="w-6 h-6"
                />
                <p className="text-lg font-semibold">Chat Bot</p>
              </div>
              <button
                onClick={toggleChatbox}
                className="p-0.5 bg-[rgb(0_0_0_/_97%)] rounded-lg hover:bg-black/60 text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Messages Container */}
            <div className="p-4 h-80 overflow-y-auto">
              {prevPrompts.map((message) => (
                <div
                  key={message.id}
                  className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}
                >
                  <p
                    className={`py-2 px-4 inline-block rounded-lg ${
                      message.sender === "user"
                        ? darkMode
                          ? "bg-[rgb(0_0_0_/_97%)] text-white"
                          : "bg-[hsl(0,0%,20%)] text-white"
                        : darkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    style={{
                      textAlign: message.sender === "user" ? "right" : "left",
                      wordWrap: "break-word",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {message.text}
                  </p>
                </div>
              ))}

              {/* Loading Animation */}
              {loading && (
                <div className="text-left mb-2">
                  <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-9 bg-gray-200 rounded-lg dark:bg-gray-700 w-48 mb-4">
                      <p className="py-2 px-4 inline-block rounded-lg text-gray-200"></p>
                    </div>
                  </div>
                </div>
              )}

              {/* Scroll to latest message */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Field */}
            <div className="p-4 border-t flex">
              <input
                type="text"
                placeholder="Type a message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleInputKeyPress}
                className={`w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}
              />
              <button
                onClick={handleSendMessage}
                className={`bg-[hsl(0,0%,20%)] text-white px-4 py-2 rounded-r-md hover:bg-[rgb(0_0_0_/_97%)] transition duration-300 ml-2 ${darkMode ? 'bg-gray-600' : 'bg-gray-900'}`}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

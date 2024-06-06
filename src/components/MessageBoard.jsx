import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [messageText, setMessageText] = useState("");

  const handleMessageTextChange = (event) => {
    setMessageText(event.target.value);
  };

  const addMessage = (event) => {
    event.preventDefault();
    if (messageText.trim()) {
      const newMessage = [...message];
      newMessage.push(messageText);
      setMessage(newMessage);
      setMessageText("");
    }
  };

  const deleteMessage = (messageIndex) => {
    const newMessage = [...message];
    newMessage.splice(messageIndex, 1);
    setMessage(newMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleMessageTextChange}
            value={messageText}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div className="board">
        {message.map((item, index) => (
          <div className="message" key={index}>
            <h1>{item}</h1>
            <button
              className="delete-button"
              onClick={() => {
                deleteMessage(index);
              }}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;

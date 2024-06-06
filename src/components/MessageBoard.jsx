import { useState } from "react";
function MessageBoard() {
  let [messageInput, setMessageInput] = useState([]);
  let [messagetext, setMessageText] = useState('');
  let toggleInput = (event) => {
    event.preventDefault
    setMessageInput([...messageInput, messagetext]);
    setMessageText('');
  };
  let addText = (event) => {
    setMessageText(event.target.value);
  };
  let removeText =(event)=>{
    let deleteText =[...messageInput]
    deleteText.splice(event,1)
    setMessageInput(deleteText)
  }
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messagetext}
            onChange={addText}
          />
        </label>
        <button className="submit-message-button" onClick={toggleInput}>
          Submit
        </button>
      </div>
      <div class="board">
        {messageInput.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button className="delete-button" onClick={()=>removeText(index)}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;



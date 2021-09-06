import logo from './logo.svg';
import './App.css';
import { MessageText } from './components/Message';
import { useEffect, useState } from 'react';

const answers = ["Я бот",
  "Как дела?",
  "Я ничего не умею",
  "Мне скучно. Поговори со мной",
  "Hello world",
  "My name is Bot"]

function App() {

  const [arrMessages, setArrMessages] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (arrMessages[arrMessages.length - 1]?.author === "I") {
      setTimeout(() => setArrMessages((prevArrMessages) => [
        ...prevArrMessages,
        { text: answers[Math.floor(answers.length * Math.random())], author: "bot" },
      ]), 1500);
    }
  }, [arrMessages]);

  const handleAddMessage = () => {
    setArrMessages(arrMessages => [...arrMessages, { text: value, author: "I" }]);
    console.log(arrMessages);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <div>
        <div className="chatarea">
          <div className="title">
            <span>Чат</span>
          </div>
          {arrMessages.map((message, i) => <MessageText key={i} someText={message.text} id={i} />)}
          <div className="input-area"> 
          
          <input value={value} onChange={handleChange}></input>
          <button className = "send-btn" onClick={handleAddMessage}>Отправить сообщение</button>
          </div>          
        </div>
      </div>
    </div>
  );
}

export default App;

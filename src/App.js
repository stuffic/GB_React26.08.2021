import logo from './logo.svg';
import './App.css';
import { MessageText } from './components/Message';

const Name = "Valeeva Diana";

function App() {
  return (
    <div className="App">
      <MessageText SomeText = {Name}></MessageText>
    </div>
  );
}

export default App;

import './App.css';
import Display from './components/Display';
import ControlledForm from './components/ControlledForm';
import { useState } from "react"

function App() {

  const [question, setQuestion] = useState({});
  

  return (
    <div className="App">
      <Display question={question}/>
      <ControlledForm setQuestion={setQuestion}/>
    </div>
  );
}

export default App;

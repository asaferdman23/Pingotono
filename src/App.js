import './App.css';
import './index.css';
import './Form.css';
import { Login } from './Login';
import { Register } from './Register';
import pingpong from './pingpong.png';
import { useState } from 'react';

function App() {
  const appName = "MotoPong";
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      
      <img src={pingpong} alt="Ping Pong Racket" className="pingpong-image" />
      <h1>{appName}</h1>
      {
        currentForm === "login" ? 
          <Login onFormSwitch={toggleForm}/> : 
          <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;

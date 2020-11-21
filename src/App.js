import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [time, change] = useState(new Date().toLocaleTimeString());
  const call = () =>
  {
    change(new Date().toLocaleTimeString());
  }
  setInterval(call, 1000);
  return (
    <>
      <h1 style={{textAlign:"center",fontWeight:"bold"}}>{ time}</h1>
      </>
  );
}

export default App;

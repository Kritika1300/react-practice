import React,{useState} from 'react';
import './App.css';
const App = () => {
let newTime = new Date().toLocaleTimeString();
const [ctime,setTime] = useState(newTime);
const updateTime = () => {
  newTime = new Date().toLocaleTimeString();
  setTime(newTime);
};
setInterval(updateTime,1000);
  return (
    <>
    <h1>{ctime}</h1>
    </>
  );
}

export default App;

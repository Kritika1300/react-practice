import React,{useState} from 'react';
import './App.css';
const App = () => {
const colour = "red";
const [bg,setBg] = useState(colour);
const [name,setName] = useState('Hello');
const bgChange = () => {
 let newBg = 'black';
 setBg(newBg);
 setName('Kritika');

};
    return(
      <>
      <div style = {{backgroundColor : bg}}>
      <button onClick = {bgChange}> {name} </button>
      </div>
      </>

    );
};
export default App;

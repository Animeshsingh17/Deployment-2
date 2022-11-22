import { useState } from "react";
import "./App.css";
import rawdata from "../src/rawdata.txt";
import img from "./Images/image.jpg"
 function App() {
  const [name, setName] = useState("ANIMESH");
  function handleSubmit() {
    console.log("text-encoded=>. ", rawdata)
    fetch(rawdata)
      .then((r) => r.text())
      .then((text) => setName(text));
  }
  return (
    <div className="App">
      <input placeholder={name} />
      <h1>Hi world !</h1>
      <button onClick={handleSubmit}>Submit</button>
      <img src={img} alt={name}/>
    </div>
  );
}

export default App;

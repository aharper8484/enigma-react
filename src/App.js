import { useState } from "react";
import "./App.css";
import "./components/Letters";
import "./components/InputCode";
import InputCode from "./components/InputCode";
import OutputCode from "./components/Outputcode";

function App() {
  const [encryption, setEncryption] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Enigma</h1>
        <p>Made with React</p>
      </header>
      <div>
        <p>Reflector</p>
        <p>Slow Wheel</p>
        <p>Medium Wheel</p>
        <p>Fast Wheel</p>
        <p>Static Wheel</p>
        <p>Plugboard</p>
        <InputCode
          encryptionText={encryption}
          onChange={(e) => setEncryption(e.target.value)}
        ></InputCode>
        <OutputCode result={encryption}></OutputCode>
      </div>
    </div>
  );
}

export default App;

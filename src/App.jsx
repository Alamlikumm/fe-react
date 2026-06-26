import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import UserProfile from "./components/UserProfile";

function greeting() {
  return "hay apa kabar";
}

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [name, setName] = useState("Ridho");
  return (
    <>
      <h1>Data SDM</h1>
      <UserProfile name="Ridho" job_title="Full Stack Developer" />
      <h1>ini getter count,default {count}</h1>
      <button disabled={count >= 10} onClick={() => setCount(count + 1)}>
        Klik +
      </button>
      <br />
      <button disabled={count <= 0} onClick={() => setCount(count - 1)}>
        Klik -
      </button>
      <br />
      <br />
      <h1>{isOn ? "Lampu Menyala" : "Lampu Mati"}</h1>
      <button
        onClick={() => {
          setIsOn(!isOn);
        }}>
        Toggle
      </button>
      <br /> <br />
      <h1>Nama aku adalah: {name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
    </>
  );
}

export default App;

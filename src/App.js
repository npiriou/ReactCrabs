import "./App.css";
import React, { useState } from "react";
import Attacks from "./Attacks.js";
import Mobs from "./Mobs.js";
import Score from "./Score.js";
import Buttons from "./Buttons.js";
import Chat from "./Chat.js";
import Cards from "./Cards.js";
import WaveInfo from "./WaveInfo.js";
import WAVES from "./waves.js";

function App() {
  const [wave, setWave] = useState(0);
  const [mobsLeft, setMobseft] = useState(null);
  return (
    <div className="App">
      <Attacks />
      <Mobs />
      <Score />
      <Buttons />
      <Chat />
      <Cards />
      <WaveInfo wave={WAVES[wave]} />
    </div>
  );
}

export default App;

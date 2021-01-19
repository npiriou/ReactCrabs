import "./App.css";
import React, { useState, useEffect } from "react";
import Attacks from "./Attacks.js";
import Mobs from "./Mobs.js";
import Score from "./Score.js";
import Buttons from "./Buttons.js";
import Chat from "./Chat.js";
import Cards from "./Cards.js";
import WaveInfo from "./WaveInfo.js";
import WAVES from "./wavesData.js";
import CARDS from "./cardsData.js";
function App() {
  const [wave, setWave] = useState(0);
  const [inFight, setInFight] = useState(true);
  const [workers, setWorkers] = useState(0);
  const [gold, setGold] = useState(20);
  const [score, setScore] = useState(0);
  const [leaks, setLeaks] = useState(0);
  const [deck, setDeck] = useState(CARDS);
  const [mobsLeft, setMobseft] = useState(null);
  const [boardCards, setBoardCards] = useState({ frontLine: [], backLine: [] });
  const [shopCards, setShopCards] = useState([
    CARDS[0],
    CARDS[1],
    CARDS[2],
    CARDS[3],
    CARDS[4],
  ]);

  return (
    <div className="App" id="App">
      <section className="top-section">
        <Attacks
          inFight={inFight}
          passInFight={setInFight}
          mobsLeft={mobsLeft}
          passMobseft={setMobseft}
          boardCards={boardCards}
        />
        <Mobs />
        <WaveInfo wave={WAVES[wave]} />
      </section>
      <section className="mid-section">
        <Buttons
          shopCards={shopCards}
          passShopCards={setShopCards}
          boardCards={boardCards}
          passBoardCards={setBoardCards}
          deck={deck}
          setDeck={setDeck}
          passWorkers={setWorkers}
          nbWorkers={workers}
          passGold={setGold}
          gold={gold}
          inFight={inFight}
          passInFight={setInFight}
        />
        <Cards boardCards={boardCards} passBoardCards={setBoardCards} />
        <Score nbWorkers={workers} gold={gold} />
      </section>
      <section className="bot-section">
        <Chat />
      </section>
    </div>
  );
}

export default App;

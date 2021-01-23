import "./App.css";
import { useState } from "react";
import Attacks from "./components/Attacks.js";
import Score from "./components/Score.js";
import Buttons from "./components/Buttons.js";
import Chat from "./components/Chat.js";
import Cards from "./components/Cards.js";
import WAVES from "./components/wavesData.js";
import CARDS from "./components/cardsData.js";
function App() {
  const [wave, setWave] = useState(0);
  const [inShop, setInShop] = useState(true);
  const [workers, setWorkers] = useState(0);
  const [gold, setGold] = useState(500);
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
      <Attacks
        inShop={inShop}
        passInShop={setInShop}
        mobsLeft={mobsLeft}
        passMobseft={setMobseft}
        boardCards={boardCards}
        wave={WAVES[wave]}
      />
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
          inShop={inShop}
          passInShop={setInShop}
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

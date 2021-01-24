import { useState, useEffect } from "react";

import Shop from "./Shop.js";
import "./Buttons.css";
import { ReactComponent as StartButton } from "../pictures/misc/swords-emblem(1).svg";
import { ReactComponent as StartButtonHover } from "../pictures/misc/swords-emblem(2).svg";
import { ReactComponent as StartButtonDisabled } from "../pictures/misc/swords-emblem.svg";

function Buttons(props) {
  const [startButtonHovered, setStartButtonHovered] = useState(false);
  const startButtonDisabled =
    (props.boardCards.frontLine.length === 0 ||
      (props.boardCards.frontLine.length < 4 &&
        props.boardCards.backLine.length > 0)) &&
    props.inShop;

  const clickHandlerStartRound = () => {
    props.passInShop(false);
  };
  const startButtonHover = () => {
    setStartButtonHovered(true);
  };
  const startButtonLeft = () => {
    setStartButtonHovered(false);
  };
  return props.inShop ? (
    <div className="Buttons">
      <button
        id="start-button"
        className={startButtonDisabled ? "disabled" : "enabled"}
        onClick={clickHandlerStartRound}
        onMouseOver={startButtonHover}
        onMouseLeave={startButtonLeft}
        disabled={startButtonDisabled}
      >
        {startButtonDisabled ? (
          <StartButtonDisabled />
        ) : startButtonHovered ? (
          <StartButtonHover />
        ) : (
          <StartButton />
        )}
      </button>

      <Shop
        shopCards={props.shopCards}
        passShopCards={props.passShopCards}
        boardCards={props.boardCards}
        passBoardCards={props.passBoardCards}
        gold={props.gold}
        passGold={props.passGold}
        passWorkers={props.passWorkers}
        nbWorkers={props.nbWorkers}
      />
    </div>
  ) : null;
}

export default Buttons;

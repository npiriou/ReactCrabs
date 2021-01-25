import { useState, useEffect } from "react";

import Shop from "./Shop.js";
import "./Buttons.css";
import { ReactComponent as StartButton } from "../pictures/misc/swords-emblem(1).svg";
import { ReactComponent as StartButtonHover } from "../pictures/misc/swords-emblem(2).svg";
import { ReactComponent as StartButtonDisabled } from "../pictures/misc/swords-emblem.svg";
import { ReactComponent as RollButton } from "../pictures/misc/rolling-dices.svg";
import { ReactComponent as RollButtonHover } from "../pictures/misc/rolling-dices(1).svg";

function Buttons(props) {
  const [rollButtonHovered, setRollButtonHovered] = useState(false);
  const [startButtonHovered, setStartButtonHovered] = useState(false);
  const startButtonDisabled =
    (props.boardCards.frontLine.length === 0 ||
      (props.boardCards.frontLine.length < 4 &&
        props.boardCards.backLine.length > 0)) &&
    props.inShop;

  const clickHandlerStartRound = () => {
    props.passInShop(false);
    props.passSelected(null);
  };
  const startButtonHover = () => {
    setStartButtonHovered(true);
  };
  const startButtonLeft = () => {
    setStartButtonHovered(false);
  };
  const rollButtonHover = () => {
    setRollButtonHovered(true);
  };
  const rollButtonLeft = () => {
    setRollButtonHovered(false);
  };
  const clickHandlerRoll = () => {};

  return (
    <div className="Buttons">
      {props.inShop ? (
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
      ) : null}

      {props.inShop ? (
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
      ) : null}
      {props.inShop ? null : (
        <button
          id="start-button"
          onClick={clickHandlerRoll}
          onMouseOver={rollButtonHover}
          onMouseLeave={rollButtonLeft}
        >
          {rollButtonHovered ? <RollButtonHover /> : <RollButton />}
        </button>
      )}
    </div>
  );
}

export default Buttons;

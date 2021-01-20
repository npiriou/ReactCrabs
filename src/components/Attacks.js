import React, { useState, useEffect } from "react";
import Dice from "./Dice.js";
import WaveInfo from "./WaveInfo.js";

function Attacks(props) {
  const [dices, setDices] = useState({
    shDices: [],
    piDices: [],
    maDices: [],
    mobDices: [],
  });
  const clickHandlerRoll = () => {
    //todo
  };
  props.boardCards.frontLine.forEach((card) => {
    for (
      let i = 0;
      i < Math.max(card.nbShAtt, card.nbPiAtt, card.nbMaAtt);
      i++
    ) {
      if (i < card.nbShAtt) dices.shDices.push(<Dice kind={"sharp-dice"} />);
      if (i < card.nbPiAtt) dices.piDices.push(<Dice kind={"piercing-dice"} />);
      if (i < card.nbMaAtt) dices.maDices.push(<Dice kind={"magic-dice"} />);
    }
  });
  for (let l = 0; l < props.wave.number; l++) {
    dices.mobDices.push(<Dice kind={"mob-dice"} />);
  }
  return (
    <section className="top-section">
      <div className="Attacks">
        <div id="sharpAtt">
          <span id="sharpAtt-title">Sharp Attacks</span>
          <div id="sharpAtt-dices" className="attacks-dices">
            {dices.shDices}
          </div>
        </div>
        <div id="piercingAtt">
          <span id="piercingAtt-title">Piercing Attacks</span>
          <div id="piercingAtt-dices" className="attacks-dices">
            {dices.piDices}
          </div>
        </div>
        <div id="MagicAtt">
          <span id="MagicAtt-title">Magic Attacks</span>
          <div id="MagicAtt-dices" className="attacks-dices">
            {dices.maDices}
          </div>
        </div>
        {props.inShop ? null : (
          <button id="start-button" onClick={clickHandlerRoll}>
            Roll
          </button>
        )}
      </div>
      <div className="Mobs">
        <div id="MobsAtt">
          <span id="MobsAtt-title">Mobs left</span>
          <div id="MobsAtt-dices" className="attacks-dices">
            {dices.mobDices}
          </div>
        </div>
      </div>
      <WaveInfo wave={props.wave} />
    </section>
  );
}

export default Attacks;

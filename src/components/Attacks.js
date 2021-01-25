import React, { useState, useEffect } from "react";
import Dice from "./Dice.js";
import WaveInfo from "./WaveInfo.js";
import "./Attacks.css";

function Attacks(props) {
  const tempDices = {
    shDices: [],
    piDices: [],
    maDices: [],
    mobDices: [],
  };

  props.boardCards.frontLine.forEach((card) => {
    for (
      let i = 0;
      i < Math.max(card.nbShAtt, card.nbPiAtt, card.nbMaAtt);
      i++
    ) {
      if (i < card.nbShAtt)
        tempDices.shDices.push(<Dice kind={"sharp-dice"} />);
      if (i < card.nbPiAtt)
        tempDices.piDices.push(<Dice kind={"piercing-dice"} />);
      if (i < card.nbMaAtt)
        tempDices.maDices.push(<Dice kind={"magic-dice"} />);
    }
  });
  for (let l = 0; l < props.wave.number; l++) {
    tempDices.mobDices.push(<Dice kind={"mob-dice"} />);
  }
  return (
    <section className="top-section">
      <div id="Attacks">
        <div id="sharpAtt" className="attack-type">
          <span id="sharpAtt-title">Sharp Attacks</span>
          <div id="sharpAtt-dices" className="attacks-dices">
            {tempDices.shDices}
          </div>
        </div>
        <div id="piercingAtt" className="attack-type">
          <span id="piercingAtt-title">Piercing Attacks</span>
          <div id="piercingAtt-dices" className="attacks-dices">
            {tempDices.piDices}
          </div>
        </div>
        <div id="MagicAtt" className="attack-type">
          <span id="MagicAtt-title">Magic Attacks</span>
          <div id="MagicAtt-dices" className="attacks-dices">
            {tempDices.maDices}
          </div>
        </div>
      </div>
      <div id="Mobs">
        <div id="MobsAtt" className="attack-type">
          <span id="MobsAtt-title">Mobs left</span>
          <div id="MobsAtt-dices" className="attacks-dices">
            {tempDices.mobDices}
          </div>
        </div>
      </div>
      <WaveInfo wave={props.wave} />
    </section>
  );
}

export default Attacks;

import React, { useState, useEffect } from "react";
import Dice from "./Dice.js";
import WaveInfo from "./WaveInfo.js";
import "./Attacks.css";

const rollDice = (min, max) =>
  min - 1 + Math.ceil(Math.random() * (max - min + 1));

const totalPlayerDices = (cardsArray) => {
  let [totalSharp, totalPiercing, totalMagic] = [0, 0, 0];
  cardsArray.forEach((card) => {
    totalSharp += card.nbShAtt;
    totalPiercing += card.nbPiAtt;
    totalMagic += card.nbMaAtt;
  });
  return [totalSharp, totalPiercing, totalMagic];
};
function Attacks(props) {
  const [mobsLeft, setMobseft] = useState(props.wave.number);
  const mobDices = []; // todo
  const [dices, setDices] = useState({
    shDices: [],
    piDices: [],
    maDices: [],
  });

  useEffect(() => {
    let [totalSharp, totalPiercing, totalMagic] = totalPlayerDices(
      props.boardCards.frontLine,
    );
    setDices({
      shDices: Array(totalSharp)
        .fill(0)
        .map((e, i) => <Dice key={`sharp-dice${i}`} kind="sharp-dice" />),
      piDices: Array(totalPiercing)
        .fill(0)
        .map((e, i) => <Dice key={`piercing-dice${i}`} kind="piercing-dice" />),
      maDices: Array(totalMagic)
        .fill(0)
        .map((e, i) => <Dice key={`magic-dice${i}`} kind="magic-dice" />),
    });
  }, [props.boardCards.frontLine]);

  useEffect(() => {
    //trigger when dices are rolled
    let [totalSharp, totalPiercing, totalMagic] = totalPlayerDices(
      props.boardCards.frontLine,
    );
    if (props.dicesRolled) {
      setDices({
        shDices: Array(totalSharp)
          .fill(0)
          .map((e, i) => (
            <Dice
              key={`sharp-dice${i}`}
              kind="sharp-dice"
              content={rollDice(1, 6)}
            />
          )),
        piDices: Array(totalPiercing)
          .fill(0)
          .map((e, i) => (
            <Dice
              key={`piercing-dice${i}`}
              kind="piercing-dice"
              content={rollDice(1, 6)}
            />
          )),
        maDices: Array(totalMagic)
          .fill(0)
          .map((e, i) => (
            <Dice
              key={`magic-dice${i}`}
              kind="magic-dice"
              content={rollDice(1, 6)}
            />
          )),
      });
    }
  }, [props.dicesRolled, props.boardCards.frontLine]);

  return (
    <section className="top-section">
      <div id="Attacks">
        <div id="sharpAtt" className="attack-type">
          <span id="sharpAtt-title">Sharp Attacks</span>
          <div id="sharpAtt-dices" className="attacks-dices">
            {dices.shDices}
          </div>
        </div>
        <div id="piercingAtt" className="attack-type">
          <span id="piercingAtt-title">Piercing Attacks</span>
          <div id="piercingAtt-dices" className="attacks-dices">
            {dices.piDices}
          </div>
        </div>
        <div id="MagicAtt" className="attack-type">
          <span id="MagicAtt-title">Magic Attacks</span>
          <div id="MagicAtt-dices" className="attacks-dices">
            {dices.maDices}
          </div>
        </div>
      </div>
      <div id="Mobs">
        <div id="MobsAtt" className="attack-type">
          <span id="MobsAtt-title">Mobs left</span>
          <div id="MobsAtt-dices" className="attacks-dices">
            {mobDices}
          </div>
        </div>
      </div>
      <WaveInfo wave={props.wave} />
    </section>
  );
}

export default Attacks;

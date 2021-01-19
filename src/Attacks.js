import Dice from "./Dice.js";

function Attacks(props) {
  let shDices = [];
  let piDices = [];
  let maDices = [];

  props.boardCards.frontLine.forEach((card) => {
    for (let i = 0; i < card.nbShAtt; i++) {
      shDices.push(<Dice kind={"sharp-dice"} />);
    }
    for (let j = 0; j < card.nbPiAtt; j++) {
      piDices.push(<Dice kind={"piercing-dice"} />);
    }
    for (let k = 0; k < card.nbMaAtt; k++) {
      maDices.push(<Dice kind={"magic-dice"} />);
    }
  });
  return (
    <div className="Attacks">
      <div id="sharpAtt">
        <span id="sharpAtt-title">Sharp Attacks</span>
        <div id="sharpAtt-dices" className="attacks-dices">
          {shDices}
        </div>
      </div>
      <div id="piercingAtt">
        <span id="piercingAtt-title">Piercing Attacks</span>
        <div id="piercingAtt-dices" className="attacks-dices">
          {piDices}
        </div>
      </div>
      <div id="MagicAtt">
        <span id="MagicAtt-title">Magic Attacks</span>
        <div id="MagicAtt-dices" className="attacks-dices">
          {maDices}
        </div>
      </div>
    </div>
  );
}

export default Attacks;

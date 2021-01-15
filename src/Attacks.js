import Dice from "./Dice.js";

function Attacks(props) {
  return (
    <div className="Attacks">
      <div id="sharpAtt">
        <span id="sharpAtt-title">Sharp Attacks</span>
        <div id="sharpAtt-dices"></div>
      </div>
      <div id="piercingAtt">
        <span id="piercingAtt-title">Piercing Attacks</span>
        <div id="piercingAtt-dices"></div>
      </div>
      <div id="MagicAtt">
        <span id="MagicAtt-title">Magic Attacks</span>
        <div id="MagicAtt-dices"></div>
      </div>
    </div>
  );
}

export default Attacks;

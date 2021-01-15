import Dice from "./Dice.js";

function WaveInfo(props) {
  return (
    <div className="WaveInfo">
      <span id="wave-number">Wave {props.wave.waveNumber}</span>
      <br />
      <span id="wave-name">{props.wave.name}</span>
      <br />
      <span id="wave-accuracy">Accuracy: {props.wave.accuracy}+</span>
      <br />
      <span id="wave-resistances-title">Resistances</span>
      <br />
      <div id="wave-resistances-dices">
        <Dice kind={"sharp-dice"} content={props.wave.resiSh} add={"+"} />
        <Dice kind={"piercing-dice"} content={props.wave.resiPi} add={"+"} />
        <Dice kind={"magic-dice"} content={props.wave.resiMa} add={"+"} />
      </div>
    </div>
  );
}

export default WaveInfo;

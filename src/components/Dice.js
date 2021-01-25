import "./Dice.css";

function Dice(props) {
  const textadded = props.add ? props.content + props.add : props.content;
  return <div className={`Dice ${props.kind}`}>{textadded}</div>;
}

export default Dice;

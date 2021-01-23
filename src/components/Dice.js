import "./Dice.css";

function Dice(props) {
  const content = props.add ? props.content + props.add : props.content;
  return <div className={`Dice ${props.kind}`}>{content}</div>;
}

export default Dice;

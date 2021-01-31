import { useState, useEffect } from "react";
import "./Dice.css";

function Dice(props) {
  const rolledClass = props.content ? "rolled" : null;
  const woundClass = props.wound ? "wound" : null;
  const textadded = props.add ? props.content + props.add : props.content;
  return (
    <div className={`Dice ${props.kind} ${rolledClass}${woundClass}`}>
      {textadded}
    </div>
  );
}

export default Dice;

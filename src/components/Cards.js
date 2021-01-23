import { useState } from "react";

import Card from "./Card.js";
import "./Cards.css";

function Cards(props) {
  const [selected, setSelected] = useState(null);
  let frontCards = props.boardCards.frontLine;
  let backCards = props.boardCards.backLine;
  let frontline = [];
  let backline = [];

  if (frontCards)
    frontCards.forEach((card) =>
      frontline.push(
        <div className="cardCell">
          <Card
            cardHere={card}
            key={card.number}
            boardCards={props.boardCards}
            passBoardCards={props.passBoardCards}
            selected={selected}
            passSelected={setSelected}
          />
        </div>,
      ),
    );

  if (backCards)
    backCards.forEach((card) =>
      backline.push(
        <div className="cardCell">
          <Card
            cardHere={card}
            key={card.number}
            boardCards={props.boardCards}
            passBoardCards={props.passBoardCards}
            selected={selected}
            passSelected={setSelected}
          />
        </div>,
      ),
    );
  return (
    <div className="Cards">
      <div id="frontline">{frontline}</div>
      <div id="backline">{backline}</div>
    </div>
  );
}

export default Cards;

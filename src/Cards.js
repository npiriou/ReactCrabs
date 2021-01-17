import Card from "./Card.js";

function Cards(props) {
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

import Card from "./Card.js";

function Cards(props) {
  let frontline = [];
  if (props.frontCards)
    props.frontCards.forEach((card) =>
      frontline.push(
        <div className="cardCell">
          <Card cardHere={card} key={card.number} />
        </div>,
      ),
    );
  let backline = [];
  if (props.backCards)
    props.backCards.forEach((card) => (
      <div className="cardCell">
        <Card cardHere={card} key={card.number} />
      </div>
    ));
  return (
    <div className="Cards">
      <div id="frontline">{frontline}</div>
      <div id="backline">{backline}</div>
    </div>
  );
}

export default Cards;

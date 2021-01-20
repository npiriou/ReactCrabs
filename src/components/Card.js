function Card(props) {
  const cardClickHandler = () => {
    if (
      props.cardInShop &&
      props.gold >= props.cardHere.tier * 5 &&
      (props.boardCards.frontLine.length < 4 ||
        props.boardCards.backLine.length < 4)
    ) {
      props.passBoardCards(
        props.boardCards.frontLine.length < 4
          ? {
              frontLine: [...props.boardCards.frontLine, props.cardHere],
              backLine: [...props.boardCards.backLine],
            }
          : {
              frontLine: [...props.boardCards.frontLine],
              backLine: [...props.boardCards.backLine, props.cardHere],
            },
      );
      props.passShopCards(
        props.shopCards.filter((c) => c.number !== props.cardHere.number),
      );
      props.passGold(props.gold - props.cardHere.tier * 5);
    }
  };

  const cardContent = props.cardHere ? (
    <div className="Card" onClick={cardClickHandler}>
      <div className="card-header">
        <span className="card-tier">{props.cardHere.tier}</span>
        <span className="card-name">
          <b>{props.cardHere.name}</b>
        </span>
      </div>
      {/* {<img id="art" src="" alt="card-illustration"></img>} */}
      <div id="card-attacks">
        <span> {props.cardHere.nbShAtt} Sharp</span>
        <span> {props.cardHere.nbPiAtt} Pierce</span>
        <span> {props.cardHere.nbMaAtt} Magic</span>
        <p>{props.cardHere.passive}</p>
      </div>
      <div>
        <span>
          <b>{props.cardHere.HPCurrent}</b>
        </span>
        /
        <span>
          <b>{props.cardHere.HPStart}</b>
        </span>
      </div>
    </div>
  ) : null;

  return cardContent;
}

export default Card;

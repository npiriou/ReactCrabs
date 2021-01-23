import "./Card.css";
function Card(props) {
  const cardClickHandler = () => {
    // if the card is in the shop, the click is to buy the card
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
    // else the card is on the board, the click is to select the card to move it
    else {
      if (props.selected) {
        props.passBoardCards({
          frontLine: [
            ...props.boardCards.frontLine.map((c) =>
              c.number === props.selected.number
                ? props.cardHere
                : c.number === props.cardHere.number
                ? props.selected
                : c,
            ),
          ],
          backLine: [
            ...props.boardCards.backLine.map((c) =>
              c.number === props.selected.number
                ? props.cardHere
                : c.number === props.cardHere.number
                ? props.selected
                : c,
            ),
          ],
        });
        props.passSelected(null);
      } else if (!props.selected) {
        props.passSelected(props.cardHere);
      } //bug ici ??
    }
  };
  const selectedClass =
    props.selected && props.selected.number === props.cardHere.number
      ? " selected"
      : "";

  const cardContent = props.cardHere ? (
    <div className={"Card" + selectedClass} onClick={cardClickHandler}>
      <div className={`card-header  card-tier-${props.cardHere.tier}`}>
        <span className={`card-tier`}>{props.cardHere.tier}</span>
        <span className="card-name">{props.cardHere.name}</span>
      </div>
      {/* {<img id="art" src="" alt="card-illustration"></img>} */}
      <div class="card-attacks-container">
        {props.cardHere.nbShAtt > 0 ? (
          <span class="card-attacks card-attacks-sharp">
            {props.cardHere.nbShAtt} Sharp
          </span>
        ) : null}

        {props.cardHere.nbPiAtt > 0 ? (
          <span class="card-attacks card-attacks-pierce">
            {props.cardHere.nbPiAtt} Piercing
          </span>
        ) : null}

        {props.cardHere.nbMaAtt > 0 ? (
          <span class="card-attacks card-attacks-magic">
            {props.cardHere.nbMaAtt} Magic
          </span>
        ) : null}

        {props.cardHere.passive ? <p>{props.cardHere.passive}</p> : null}
      </div>
      <div className="card-hp-container">
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

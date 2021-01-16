function Card(props) {
  const cardClickHandler = () => {
    console.log(props);
    if (props.cardInShop)
      props.passShopCards(
        props.shopCards.filter((c) => c.number !== props.cardHere.number),
      );
  };

  const cardContent = props.cardHere ? (
    <div className="Card" onClick={cardClickHandler}>
      <div className="card-header">
        <span className="card-tier">{props.cardHere.tier}</span>
        <span className="card-name">
          <b>{props.cardHere.name}</b>
        </span>
      </div>
      {/* <img id="art" src ="{8}">
</img> */}
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

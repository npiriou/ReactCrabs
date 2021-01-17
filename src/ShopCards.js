import Card from "./Card.js";

function ShopCards(props) {
  const shopCardsDisplay = [];
  props.shopCards.forEach((card) => {
    shopCardsDisplay.push(
      <div className="shop-card-container">
        <Card
          key={card.number}
          cardHere={card}
          cardInShop={true}
          shopCards={props.shopCards}
          passShopCards={props.passShopCards}
          boardCards={props.boardCards}
          passBoardCards={props.passBoardCards}
        />
        <div className="shop-card-price">{`${card.tier * 5} gold`}</div>
      </div>,
    );
  });

  return <div id="shop-cards">{shopCardsDisplay}</div>;
}

export default ShopCards;

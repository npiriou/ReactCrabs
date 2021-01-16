import Card from "./Card.js";
import { useState } from "react";

function ShopCards(props) {
  const shopCardsDisplay = [];
  props.shopCards.forEach((card) => {
    shopCardsDisplay.push(
      <Card
        key={card.number}
        cardHere={card}
        cardInShop={true}
        shopCards={props.shopCards}
        passShopCards={props.passShopCards}
      />,
    );
  });

  return <div id="shop-cards">{shopCardsDisplay}</div>;
}

export default ShopCards;

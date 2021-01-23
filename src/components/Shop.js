import React from "react";
import Modal from "react-modal";
import Card from "./Card.js";
import Score from "./Score.js";
import "./Shop.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement("#yourAppElement");

function Shop(props) {
  //var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>SHOP</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button onClick={closeModal}>&times;</button>
        <Score gold={props.gold} />
        <div id="shop-cards">
          {props.shopCards.map((card) => (
            <div className="shop-card-container">
              <Card
                key={card.number}
                cardHere={card}
                cardInShop
                shopCards={props.shopCards}
                passShopCards={props.passShopCards}
                boardCards={props.boardCards}
                passBoardCards={props.passBoardCards}
                gold={props.gold}
                passGold={props.passGold}
              />
              <div className="shop-card-price">{`${card.tier * 5} gold`}</div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default Shop;

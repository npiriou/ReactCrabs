import { useState } from "react";
import Modal from "react-modal";
import Card from "./Card.js";
import Score from "./Score.js";
import "./Shop.css";
import { ReactComponent as ShopLogo } from "../pictures/misc/cash.svg";
import { ReactComponent as ShopLogoHover } from "../pictures/misc/cash(1).svg";
import { ReactComponent as BuyWorker } from "../pictures/misc/farmer.svg";
import { ReactComponent as BuyWorkerHover } from "../pictures/misc/farmer(1).svg";
import { ReactComponent as BuyWorkerDisabled } from "../pictures/misc/farmer(2).svg";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement("#yourAppElement");

function Shop(props) {
  const workerPrice = 10;
  const maxWorkers = 10;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [shopButtonHovered, setShopButtonHovered] = useState(false);
  const [workerButtonHovered, setWorkerButtonHovered] = useState(false);
  const workerButtonDisabled =
    props.gold < workerPrice || props.nbWorkers >= maxWorkers;

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
  const shopButtonHover = () => {
    setShopButtonHovered(true);
  };
  const shopButtonLeft = () => {
    setShopButtonHovered(false);
  };
  const clickHandlerWorker = () => {
    if (props.gold >= 5) {
      props.passWorkers(props.nbWorkers + 1);
      props.passGold(props.gold - workerPrice);
    }
  };
  const workerButtonHover = () => {
    setWorkerButtonHovered(true);
  };
  const workerButtonLeft = () => {
    setWorkerButtonHovered(false);
  };
  return (
    <div>
      <button
        onClick={openModal}
        id="openShopButton"
        onMouseOver={shopButtonHover}
        onMouseLeave={shopButtonLeft}
      >
        {shopButtonHovered ? <ShopLogoHover /> : <ShopLogo />}
      </button>
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
          <div>
            <button
              id="buyWorkerButton"
              onClick={clickHandlerWorker}
              onMouseOver={workerButtonHover}
              onMouseLeave={workerButtonLeft}
              disabled={workerButtonDisabled}
              className={workerButtonDisabled ? "disabled" : "enabled"}
            >
              {workerButtonDisabled ? (
                <BuyWorkerDisabled />
              ) : workerButtonHovered ? (
                <BuyWorkerHover />
              ) : (
                <BuyWorker />
              )}
            </button>
            <div className="shop-card-price">{`${workerPrice} gold`}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Shop;

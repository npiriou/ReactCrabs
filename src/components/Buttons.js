import Shop from "./Shop.js";

function Buttons(props) {
  const workerPrice = 10;
  const clickHandlerWorker = () => {
    if (props.gold >= 5) {
      props.passWorkers(props.nbWorkers + 1);
      props.passGold(props.gold - workerPrice);
    }
  };
  const clickHandlerStartRound = () => {
    props.passInShop(false);
  };

  return props.inShop ? (
    <div className="Buttons">
      <button id="start-button" onClick={clickHandlerStartRound}>
        Start round
      </button>
      <button onClick={clickHandlerWorker} disabled={props.gold < workerPrice}>
        {workerPrice}G Buy a worker
      </button>
      <Shop
        shopCards={props.shopCards}
        passShopCards={props.passShopCards}
        boardCards={props.boardCards}
        passBoardCards={props.passBoardCards}
        gold={props.gold}
        passGold={props.passGold}
      />
    </div>
  ) : null;
}

export default Buttons;
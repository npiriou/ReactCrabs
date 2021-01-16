import Shop from "./Shop.js";

function Buttons(props) {
  const clickHandlerWorker = () => {
    if (props.gold >= 5) {
      props.passWorkers(props.nbWorkers + 1);
      props.passGold(props.gold - 5);
    }
  };

  return (
    <div className="Buttons">
      <button id="start-button">Start next round</button>
      <button onClick={clickHandlerWorker}>5G Buy a worker</button>
      <Shop shopCards={props.shopCards} passShopCards={props.passShopCards} />
    </div>
  );
}

export default Buttons;

function Score(props) {
  return (
    <div className="Score">
      {props.nbWorkers !== undefined ? (
        <div id="score-workers">Workers: {props.nbWorkers}</div>
      ) : null}
      {props.gold !== undefined ? (
        <div id="score-gold">Gold: {props.gold}</div>
      ) : null}
    </div>
  );
}

export default Score;

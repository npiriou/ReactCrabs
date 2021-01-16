function Score(props) {
  return (
    <div className="Score">
      <div id="score-workers">Workers: {props.nbWorkers}</div>
      <div id="score-gold">Gold: {props.gold}</div>
    </div>
  );
}

export default Score;

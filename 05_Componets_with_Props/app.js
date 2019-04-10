// Old Code 
// JSX Tag
// User Define Component to user a header tag
const Header = (props) => {
  // return react element
  console.log(props)
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Player: {props.totalPlayers + 1}</span>
    </header>
  );
};
// A different way

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">Simmigon</span>
      {/* 
      Look at 
      <div className="counter" >
        <button className="counter-action decrement">
         -
        </button>
        <span className="counter-score">35</span>
        <button className="counter-action increment">
         +
        </button>
    </div> */}
      <Counter />
    </div>
  );
};

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decrement">-</button>
      <span className="counter-score">35</span>
      <button className="counter-action increment">+</button>
    </div>
  );
};

const App = () => {
  return (
  <div className="scoreboard">
  {/* Since the hearder tag is used here we can add props */}
    <Header title="Scoreboard" totalPlayers={9000}/>
    <Player />
  </div>);
};

ReactDOM.render(<App />, document.getElementById("root"));

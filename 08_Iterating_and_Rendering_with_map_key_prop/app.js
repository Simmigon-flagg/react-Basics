const players = [  {
  name: "Jimmy",
  score: 89,
  id: 1
},
{
  name: "James",
  score: 68,
  id: 2
},
{
  name: "Simmigon",
  score: 38,
  id: 3
},
{
  name: "Isaiah",
  score: 20,
  id: 4
},
{
  name: "Denzel",
  score: 12,
  id: 5
}
];
const Header = (props) => {
  // return react element
  console.log(props)
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Player: {props.totalPlayers}</span>
    </header>
  );
};
// A different way

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>
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
      <Counter counterscore={props.score}/>
    </div>
  );
};

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement">-</button>
      <span className="counter-score">{props.counterscore}</span>
      <button className="counter-action increment">+</button>
    </div>
  );
};

const App = (props) => {
  return (
  <div className="scoreboard">
  {/* Since the hearder tag is used here we can add props */}
    <Header title="Scoreboard" totalPlayers={props.initPlayers.length}/>
    {/* Old stuff is here */}
    {/* <Header title="Scoreboard" totalPlayers={9000}/> */}

    {/* Players */}

    {props.initPlayers.map( player => 
      <Player 
      name={player.name}
       score={player.score}
       key={player.id.toString()}
        />
    )}
    {/* Same as above */}

    {/* <Player name="Simmigon" score={38} />
    <Player name="Denzel" score={12} />
    <Player name="James" score={68} />
    <Player name="Jimmy" score={89} /> */}
  </div>);
};

ReactDOM.render(<App initPlayers={players} />, document.getElementById("root"));

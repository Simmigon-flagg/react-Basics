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
  console.log(props.removePlayer)
  return (
    <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
      
      
      {props.name}</span>
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
      {/* <Counter counterscore={props.score}/> */}
      <Counter />
    </div>
  );
};

// Class es 2016
class Counter extends React.Component {
  state = {
    counterscore: 0
  }; 

  //Method 
  incrementScore = () => {

    this.setState( prevState => ({
        counterscore: prevState.counterscore + 1
    }));

    console.log(this)
  }
  //Method 
  decrementScore = () => {
    this.setState( prevState => ({
        counterscore: prevState.counterscore - 1
    }));
    console.log(this)
  }

  render(){
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
        {/* <span className="counter-score">{this.props.counterscore}</span> */}
        <span className="counter-score">{this.state.counterscore}</span>
        <button className="counter-action increment" onClick={this.incrementScore}>+</button>
      </div>
    );
  }
};

class App extends React.Component {

  state = {
    players:[
      {
      name: "Jimmy",
      id: 1
    },
    {
      name: "James",
      id: 2
    },
    {
      name: "Simmigon",
      id: 3
    },
    {
      name: "Isaiah",
      id: 4
    },
    {
      name: "Denzel",
      id: 5
    }

    ]
  };

handleRemovePlayer  = (id) => {
  this.setState( prevState => {
    return {
      players: prevState.players.filter(p => p.id !== id) 
    };
  });
}
  render(){
    return (
      <div className="scoreboard">
        <Header title="Scoreboard"
         totalPlayers={this.state.players.length}/>


        {this.state.players.map( player => 
          <Player 
          name={player.name}
          id={player.id}
          key={player.id.toString()}
          removePlayer={this.handleRemovePlayer}
            />
        )}
 
      </div>);
  }
}


ReactDOM.render(<App />, document.getElementById("root"));

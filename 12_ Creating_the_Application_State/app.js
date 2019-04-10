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
      {/* <Counter counterscore={props.score}/> */}
      <Counter />
    </div>
  );
};

// Class es 2016
class Counter extends React.Component {

  // State Object
  // constructor(){
  //   super()
  //   this.state = {
  //     counterscore: 0
  //   };
  // }
  // or ======== ======== like this
  state = {
    counterscore: 0
  }; 

  //Method 
  incrementScore = () => {
    // console.log("incrementScore Method")
    // set State needs an object
    this.setState( prevState => ({
        counterscore: prevState.counterscore + 1
    }));

    console.log(this)
  }
  //Method 
  decrementScore = () => {
    // console.log("incrementScore Method")
    // set State needs an object
    this.setState( prevState => ({
        counterscore: prevState.counterscore - 1
    }));
    console.log(this)
  }
  
  // decrementScore = () => {
  // this.setState( 
  //   prevState => ({})
  // );
  // }
  // decrementScore = () => {
  // this.setState();
  // }
  // decrementScore = () => {}

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
// const Counter = (props) => {
//   return (
//     <div className="counter">
//       <button className="counter-action decrement">-</button>
//       <span className="counter-score">{props.counterscore}</span>
//       <button className="counter-action increment">+</button>
//     </div>
//   );
// };
// Classes are Stateful components
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


  render(){
    return (
      <div className="scoreboard">
      {/* Since the hearder tag is used here we can add props */}
        <Header title="Scoreboard"
         totalPlayers={this.state.players.length}/>
        {/* Old stuff is here */}
        {/* <Header title="Scoreboard" totalPlayers={9000}/> */}
    
        {/* Players */}
    
        {this.state.players.map( player => 
          <Player 
          name={player.name}
          //  score={player.score}
    
           key={player.id.toString()}
            />
        )}
 
      </div>);
  }
}


ReactDOM.render(<App />, document.getElementById("root"));

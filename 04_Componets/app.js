//  All old code
// const titleid =  'main-title';
// const title = 'JSX';
// const desc = 'I know how to create react nodes AND render it to the DOM';
// const name = 'Simmigon Flagg'

// const header = (
// <header>

// <h1 id={titleid} > {title} {name}'s First react element user JSX</h1>
// <p>{desc}</p>

// </header>
// );
// console.log(header)

// JSX Tag
// User Define Component to user a header tag
// function Header(){
//     // return react element
//     return (
//         <header>
//             <h1>
//             Scoreboard
//             </h1>
//             <span className="stats">Player: 1</span>
//         </header>
//     );
// }

// JSX Tag
// User Define Component to user a header tag
const Header = () => {
  // return react element
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Player: 1</span>
    </header>
  );
};
// A different way

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">Simmigon</span>
      {/* 
      //Notice Line 64 or the Counter Function
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
    <Header />
    <Player />
  </div>);
};

ReactDOM.render(<App />, document.getElementById("root"));

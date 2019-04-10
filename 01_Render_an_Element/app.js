// Where can look at create element here: https://reactjs.org/docs/react-api.html#createelement
// React.createElement(
//     type,
//     [props],
//     [...children]
//   )

//This is an object

const title = React.createElement(
    'h1',
    {id: 'main-title', title:'This is the title'},
    'This childern prop'
);
console.log(title)


// const title = <div>My first react stuff</div>;


// const de = React.createElement(
//     'p',
//     null,
//     'I know how to create react nodes AND render it to the DOM '
// );


// const header = React.createElement(
//     'header',
//     null,
//     title,
//     de
// );
// //  Create and update the DOM
// // Two element or javascript Object

ReactDOM.render(
    title,
    document.getElementById('root')
);



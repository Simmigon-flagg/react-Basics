// JSX
// old one
// const title = React.createElement(
//     'h1',
//     {id: 'main-title', title:'This is the title'},
//     'This childern prop'
// );
const titleid =  'main-title';
const title = 'JSX';
const desc = 'I know how to create react nodes AND render it to the DOM';
const name = 'Simmigon Flagg'




const header = (
<header>

<h1 id={titleid} > {title} {name}'s First react element user JSX</h1>
<p>{desc}</p>

</header>
);
console.log(header)

ReactDOM.render(
    header,
    document.getElementById('root')
);



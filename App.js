
/*const heading=React.createElement("h1",{},"hello world from react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/

//Nested tags in  react

const parent=React.createElement(
    "div",
{id:"parent"},
 React.createElement(
    "div"
 ,{id:"child"},
 React.createElement(
    "h1",{},"hi i am h1 tag")
)
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
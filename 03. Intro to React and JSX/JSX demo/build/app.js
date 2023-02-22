var rootDomElement = document.getElementById("root");
var rootReactElement = ReactDOM.createRoot(rootDomElement);

//   create heading into header
var headingElement = React.createElement("h1", {}, "Hello from React!");
var paragrpahElement = React.createElement("p", { "className": "info" }, "Some info here!!!");

var headerElement = React.createElement("header", {}, headingElement, paragrpahElement);

rootReactElement.render(headerElement);

console.log(JSON.parse(JSON.stringify(headingElement)));
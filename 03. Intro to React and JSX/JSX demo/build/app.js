var rootDomElement = document.getElementById("root");
var rootReactElement = ReactDOM.createRoot(rootDomElement);

// //   create heading into header
// const headingElement = React.createElement("h1", {}, "Hello from React!");
// const paragrpahElement = React.createElement("p",{"className":"info"}, "Some info here!!!") 

// const headerElement = React.createElement("header", {}, headingElement, paragrpahElement);

var headerElement = React.createElement(React.createElement(
      "header",
      null,
      React.createElement(
            "h1",
            null,
            "Hello"
      ),
      React.createElement(
            "h2",
            null,
            "Second try!!"
      )
));

rootReactElement.render(headerElement);

// console.log(JSON.parse(JSON.stringify(headingElement)));
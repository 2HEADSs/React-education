      const rootDomElement = document.getElementById("root");
      const rootReactElement = ReactDOM.createRoot(rootDomElement);

      //   create heading into header
      const headingElement = React.createElement("h1", {}, "Hello from React!");
      const paragrpahElement = React.createElement("p",{"className":"info"}, "Some info here!!!") 

      const headerElement = React.createElement("header", {}, headingElement, paragrpahElement);

      rootReactElement.render(headerElement);


      console.log(JSON.parse(JSON.stringify(headingElement)));
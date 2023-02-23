const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// const headingElement = React.createElement('h1', {}, 'Hello from React!');
// const secondHeadingElement = React.createElement('h2', {}, 'Some slogan here');
// const headerElement = React.createElement('header', {}, headingElement, secondHeadingElement);
// Use JSX Syntax 

const headerElement = (
    <div>
        <header className="header-container">
            <h1 className="heading">Hello from React!</h1>
            <h2>Slogan here</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis consequuntur architecto dolorum sit quidem tenetur doloremque aspernatur reprehenderit ratione sed!</p>
        </header>

        <button>Click</button>
    </div>
);

root.render(headerElement);
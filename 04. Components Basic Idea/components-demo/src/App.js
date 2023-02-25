import "./App.css";
import MovieList from "./components/MovieList";
import Timer from "./components/Timer";

function App() {
    const movies = [
        {
            title: "Man of steel",
            year: 2008,
            cast: ["Henry Cavil", "Russel Crow"],
        },
        {
            title: "Harry Potter",
            year: 2008,
            cast: ["Daniel Rdclif", "Ema Watson"],
        },
        { title: "Lord of the rings", year: 2008, cast: ["Orlando Bloom"] },
    ];
    return (
        <div className="App">
            <h1>React Demo</h1>
            <Timer start={5} />

            <h1>Movie title</h1>
            {/* passing booolean
      isNew
       isTrue={true} */}

            <MovieList movies={movies} />
        </div>
    );
}

export default App;

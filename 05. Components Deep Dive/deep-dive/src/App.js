import { useState } from "react";
import MovieList from "./components/MovieList";
import { movies as movieData } from "./movies";

function App() {
    const [movies, setMovies] = useState(movieData);

    const onMovieDelete = (id) => {
        //removing movie with id wich we pass to onMovieDelete function
        setMovies((state) => state.filter((x) => x.id !== id));
    };
    return (
        <div className="App">
            <h1>Movie collection</h1>
            <MovieList movies={movies} onMovieDelete = {onMovieDelete}/>
        </div>
    );
}

export default App;

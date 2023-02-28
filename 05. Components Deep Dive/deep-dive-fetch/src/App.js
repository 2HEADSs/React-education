import { useState } from "react";
import MovieList from "./components/MovieList";
import { movies as movieData } from "./movies";

function App() {
    const [movies, setMovies] = useState(movieData);

    const onMovieDelete = (id) => {
        //removing movie with id wich we pass to onMovieDelete function
        setMovies((state) => state.filter((x) => x.id !== id));
    };

    const onMovieSelect = (id) => {
        //removing movie with id wich we pass to onMovieDelete function
        setMovies((state) =>
            //pass thrue all elements and if x.id ===x => add selected property(key)
            // state.map((x) => (x.id === id ? { ...x, selected: true } : x))
            // same as upper
            state.map((x) => ({ ...x, selected: x.id === id }))
        );
    };

    return (
        <div className="App">
            <h1>Movie collection</h1>
            <MovieList
                movies={movies}
                onMovieDelete={onMovieDelete}
                onMovieSelect={onMovieSelect}
            />
        </div>
    );
}

export default App;

import Movie from "./Movie";

export default function MovieList({ movies }) {
    const firstMovie = movies[0];
    return <Movie {...firstMovie} />;
}

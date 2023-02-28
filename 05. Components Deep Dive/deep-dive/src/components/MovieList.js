import Movie from "./Movie";

export default function MovieList({ movies }) {
    // first way with desctructuring
    // const firstMovie = movies[0];
    // return <Movie {...firstMovie} />;

    // second way with array of movies - wrong way
    // return [
    //     <Movie {...movies[0]} />,
    //     <Movie {...movies[1]} />,
    //     <Movie {...movies[2]} />,

    // ]

    //third way
    // let movieList = movies.map(movie => <li> <Movie {...movie}/> </li>);

    // return(
    //     <ul>
    //         {movieList}
    //     </ul>
    // )

    //right way
    return (
        <ul>
            {movies.map((movie) => (
                <li>
                    <Movie {...movie} />
                </li>
            ))}
        </ul>
    );
}

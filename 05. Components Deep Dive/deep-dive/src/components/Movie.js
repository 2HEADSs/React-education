import { useEffect } from "react";

export default function Movie({
    id,
    title,
    year,
    plot,
    posterUrl,
    director,
    onMovieDelete,
    onMovieSelect,
    selected,
}) {
    useEffect(() => {
        console.log(`Movie ${title} - mounted`);
    }, []);
    useEffect(() => {
        console.log(`Movie ${title} - updated`);
    }, [selected]);

    return (
        <article>
            <h3>
                {title}, {year}
            </h3>
            {selected && <h4>Selected</h4>}
            <main>
                <img src={posterUrl} alt={title} />
                <p>{plot}</p>
            </main>
            <footer>
                <p>Director {director}</p>
                <button onClick={() => onMovieDelete(id)}>Delete</button>
                <button onClick={() => onMovieSelect(id)}>Selected</button>
            </footer>
        </article>
    );
}

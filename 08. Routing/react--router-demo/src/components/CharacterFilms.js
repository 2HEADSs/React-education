import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const baseUrl = 'https://swapi.dev/api/';

//
// 
//this component do not work properly because the API
// 
// 

export const CharacterFilms = () => {
    const [films, setFilms] = useState([])
    const { characterId } = useParams();

    // fetc /people/${characterId}/films from API
    useEffect(() => {
        fetch(`${baseUrl}/films`)
            .then(res => res.json())
            .then(data => {
                setFilms(data.results)
            })
    }, [characterId])


    return (
        <>
            <h1>Characters films</h1>
            {films.map(x => {
                const id = x.url.split('/').slice(-2)[0];
                return < li key={id} >
                    <Link to={`/films/${id}`}>
                        {x.title}
                    </Link>
                </li >
            })}
        </>
    )
}
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link, Routes, Route } from "react-router-dom";
import { CharacterFilms } from "./CharacterFilms";

const baseUrl = 'https://swapi.dev/api/people';

export const Character = () => {
    const { characterId } = useParams();
    const navigate = useNavigate()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`${baseUrl}/${characterId}`)
            .then(res => res.json())
            .then(data => {
                setCharacter(data)
            })
    }, [characterId])

    const onBackButtonClick = () => {
        // navigate(-1)
        navigate('/characters')
    }

    return (
        <>
            <h1>Character Page</h1>
            <h2>{character.name}</h2>
            <button onClick={onBackButtonClick}>Back</button>

            <nav>
                {/* <Link to="/films">Films</Link> */}
                {/* not absolute path - relative paths */}
                <Link to="films">Films</Link>
                <br />
                <Link to="vehicles">Vehicles</Link>
                <br />
                <Link to="starships">Starships</Link>
            </nav>


            <Routes>
                <Route path="/films" element ={<CharacterFilms/>}/>
                <Route path="/vehicles" element ={<h5>Vehicles</h5>}/>
                <Route path="/starships" element ={<h5>Starships</h5>}/>
            </Routes>
        </>
    );
}
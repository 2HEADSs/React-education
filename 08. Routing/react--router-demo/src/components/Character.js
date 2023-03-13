import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

        </>
    );
}
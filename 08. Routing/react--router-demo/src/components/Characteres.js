import { useEffect } from "react"
const baseUrl = 'https://swapi.dev/api/people'
export const CharacterList = () => {

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [])

    return (
        <h1>Characters</h1>
    );
}
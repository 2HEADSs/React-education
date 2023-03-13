import { Link } from "react-router-dom"

export const CharacterListItem = ({
    name,
    url
}) => {
    const id = url.split('/').slice(-2)[0]
    console.log(id);
    return (
        <div>
            <Link to={`/characters/${id}`} >{name}</Link >
        </div>
    )
}
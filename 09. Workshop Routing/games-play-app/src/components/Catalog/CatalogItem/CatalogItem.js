export const CatalogItem = ({
    title,
    imageUrl,
    category
}) => {
    console.log(    title,
        imageUrl,
        category);
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <a href="#" className="details-button">Details</a>
            </div>

        </div>
    )
}
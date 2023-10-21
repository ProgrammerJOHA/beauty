import Card from "./Card";
function CardParent({Texth1}) {
    return (
        <div className="cardParent">
            <h1 className="cardParenth1">{Texth1}</h1>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}
export default CardParent;
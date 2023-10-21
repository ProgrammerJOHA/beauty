export function Pinkdiv({ Pinkh1, Pinkp, Notknow, Img }) {
    return (
        <div className="pinkDiv">
            <div className="pinkText">
                <h1>{Pinkh1}</h1>
                <p>{Pinkp}</p>
                <span>{Notknow}</span>
            </div>
            <span>{Img}</span>
        </div>
    )
}
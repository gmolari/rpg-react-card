import "../styles/card-race.sass"

export default function CardRace({race, url, img}){


    return (
        <div className="div-card-race">
            <div className="div-img-race"> IMG RACE </div>
            <div className="div-name-race"> {race} </div>
            <div className="div-svg"> SVG </div>
        </div>
    )
}
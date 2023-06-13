import "../styles/card-race.sass"

export default function CardRace({race, url, img}){


    return (
        <div className="div-card-race">
            <div className="div-img-race"> 
                <img src={img} alt={'Avatar '+race} /> 
            </div>
            <div className="div-name-race"> 
                <p>{race}</p> 
            </div>
            <div className="div-svg"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="svg-chev feather feather-chevron-right">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            </div>
        </div>
    )
}
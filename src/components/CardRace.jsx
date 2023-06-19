import { useContext } from "react"
import "../styles/characters/card-race.sass"
import { Context } from "../context/Context"

export default function CardRace({race, url, imgSrc}){
    const {setInputs} = useContext(Context)

    function handleRace(){
        setInputs((prevValue) => ({
            ...prevValue,
            name_race: race
        }))
    }

    return (
        <div className="div-card-race" onClick={handleRace}>
            <div className="div-img-race"> 
                <img src={imgSrc} alt={'Avatar '+race} /> 
            </div>
            <div className="div-name-race"> 
                <p>{race}</p> 
            </div>
            <div className="div-svg"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svg-chev feather feather-chevron-right">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            </div>
        </div>
    )
}
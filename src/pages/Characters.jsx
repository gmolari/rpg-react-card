import { useContext, useEffect, useState } from 'react'
import '../styles/characters.sass'
import { Context } from '../context/Context'
import CardRace from '../components/CardRace'
import { ButtonNext, ButtonPrev } from '../components/Buttons'


export default function Characters(){
    const {races} = useContext(Context)
    const [count, setCount] = useState(0)


    const charRoutes = [
        <h1>Main</h1>,
        races?.results.map(i => (
            <CardRace key={i.name} imgSrc={"src/assets/imgs/races/"+i.index+".jpeg"} race={i.name} url={i.url}/>
        )),
        <h1> Classes </h1>,
    ]

    useEffect(() => {
        
    }, [races])

    return (
        <section className='section-characters'>
            <div className="div-container">
                <div className="div-container-flex">
                    {charRoutes[count]}
                </div>
                <ButtonNext newClassD={"right-d"} newClass={"right"} route={[count, setCount]} />
                <ButtonPrev newClassD={'left-d'} newClass={"left"} route={[count, setCount]} />
            </div>
        </section>
    )
}
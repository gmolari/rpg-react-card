import { useContext, useEffect, useState } from 'react'
import '../styles/characters.sass'
import { Context } from '../context/Context'
import CardRace from '../components/CardRace'
import { ButtonNext, ButtonPrev } from '../components/ButtonNext'


export default function Characters(){
    const {races} = useContext(Context)
    const [count, setCount] = useState(0)

    const charRoutes = [
        <h1>Main</h1>,
        races?.results.map(i => (
            <CardRace key={i.name} race={i.name} url={i.url}/>
        )),
        <h1> Classes </h1>,
    ]

    useEffect(() => {
        
    }, [races])

    return (
        <section className='section-characters'>
            {charRoutes[count]}
            <ButtonNext route={[count, setCount]} />
            <ButtonPrev route={[count, setCount]} />
        </section>
    )
}
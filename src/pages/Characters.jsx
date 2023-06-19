import { useContext, useEffect, useState } from 'react'
import '../styles/characters/characters.sass'
import { Context } from '../context/Context'
import CardRace from '../components/CardRace'
import { ButtonNext, ButtonPrev } from '../components/Buttons'
import ImageRegister from '../components/ImageRegister'
import InputFields from '../components/InputsField'
import ShowCharCard from '../components/ShowCharCard'

export default function Characters(){
    const {races} = useContext(Context)
    const [count, setCount] = useState(0)

    const arrayPlayer = [
        {placeholder: "Player's name", index: 'name_player'}, 
        {placeholder: "Character's name", index: 'name_char'}
    ]

    const charRoutes = [
        <div>
            <h2 className='h2-title'>Let's create a new Character!</h2>
            <div className="div-start-inputs">
                <ImageRegister />
                <InputFields array={arrayPlayer} />
            </div>
        </div>,

        <div className="div-choose-races">
            <h2 className='h2-title'>Choose your Race</h2>
            {
                races?.results.map(i => (
                    <CardRace key={i.name} imgSrc={"src/assets/imgs/races/"+i.index+".jpeg"} race={i.name} url={i.index}/>
                ))
            }
        </div>,

        <h1> Classes </h1>,
    ]

    useEffect(() => {
        
    }, [races])

    return (
        <section className='section-characters'>
            <div className="div-container">
                {
                    count >= 1 && <ShowCharCard />
                }
                <div className="div-container-flex">
                    {charRoutes[count]}
                </div>
                <ButtonNext newClassD={"right-d"} newclassName={"right"} route={[count, setCount]} />
                <ButtonPrev newClassD={'left-d'} newclassName={"left"} route={[count, setCount]} />
            </div>
        </section>
    )
}
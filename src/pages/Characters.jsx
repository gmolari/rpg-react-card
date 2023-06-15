import { useContext, useEffect, useState } from 'react'
import '../styles/characters/characters.sass'
import { Context } from '../context/Context'
import CardRace from '../components/CardRace'
import { ButtonNext, ButtonPrev } from '../components/Buttons'
import CardCharacter from '../components/CardCharacter'

export default function Characters(){
    const {races, inputs, handleInput} = useContext(Context)
    const [count, setCount] = useState(0)

    const charRoutes = [
        <div>
            <h2 className='h2-title'>Let's create a new Character!</h2>
            <div className="div-start-inputs">
                <CardCharacter />
                <span className="centering">
                    <span className="box">
                        <div className="input__wrapper">
                            <input
                                id="inpNamePlayerName"
                                name='inpNamePlayerName'
                                type="text"
                                className="input__field"
                                spellCheck="false"
                                placeholder="Type your character's name"
                                onChange={handleInput}
                            />
                            <label
                                htmlFor="inpNamePlayerName"
                                className="input__label"
                            >
                                Player's name
                            </label>

                        </div>
                        <div className="input__wrapper">
                            <input
                                id="inpNameCharacterRegister"
                                name='inpNameCharacterRegister'
                                type="text"
                                className="input__field"
                                placeholder="Type your character's name"
                                onChange={handleInput}
                                spellCheck="false"
                            />
                            <label
                                htmlFor="inpNameCharacterRegister"
                                className="input__label"
                            >
                                Character's name
                            </label>
                        </div>
                    </span>
                </span>
            </div>
        </div>,

        <div className="div-choose-races">
            <h2 className='h2-title'>Choose your Race</h2>
            {
                races?.results.map(i => (
                    <CardRace key={i.name} imgSrc={"src/assets/imgs/races/"+i.index+".jpeg"} race={i.name} url={i.url}/>
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
                <div className="div-container-flex">
                    {charRoutes[count]}
                </div>
                <ButtonNext newClassD={"right-d"} newclassName={"right"} route={[count, setCount]} />
                <ButtonPrev newClassD={'left-d'} newclassName={"left"} route={[count, setCount]} />
            </div>
        </section>
    )
}
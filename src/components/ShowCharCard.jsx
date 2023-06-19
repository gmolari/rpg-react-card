import { useContext } from "react"
import { Context } from "../context/Context"
import "../styles/characters/show-card.sass"

export default function ShowCharCard(){
    const {inputs} = useContext(Context)

    return (
        <aside className="aside-show-card">
            <section className="container">
                <div className="img-char">
                    <img src={inputs.imageChar ? inputs.imageChar : ''} alt="Character's Image" />
                </div>
                <div className="name-race-class span-block">
                    <span className="name">
                        Character's name: {inputs.name_char ? inputs.name_char : ''}
                    </span>
                    <span className="race span-block">
                        Chosen race: {inputs.name_race ? inputs.name_race : "None"}
                    </span>
                    <span className="char-class span-block">
                        <span>Chosen class:</span> {inputs.name_class ? inputs.name_class : "None"}
                    </span>
                </div>
            </section>
        </aside>
    )
}
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
                <div className="name-race-class">
                    <div className="name div-span">
                        <span className="desc">
                            Character's name: 
                        </span>
                        <span>
                            {inputs.name_char ? inputs.name_char : ''}
                        </span>
                    </div>
                    <div className="race div-span">
                        <span className="desc">
                            Chosen race: 
                        </span>
                        <span>
                            {
                                inputs.name_race ? inputs.name_race : 'None'
                            }
                        </span>
                    </div>
                    <div className="char-class div-span">
                        <span className="desc">
                            Chosen class: 
                        </span>
                        <span>
                            {inputs.name_class ? inputs.name_class : 'None'}
                        </span>
                    </div>
                </div>
            </section>
        </aside>
    )
}
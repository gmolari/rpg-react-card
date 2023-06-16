import { useContext } from "react"
import "../styles/characters/input-fields.sass"
import { Context } from "../context/Context"

export default function InputFields({array}){
    const {handleInput} = useContext(Context)

    return (
        <span className="centering">
            {
                array.map(item => (
                    <span className="box" key={item.index+"_"+array.indexOf(item)}>
                        <div className="input__wrapper">
                            <input
                                id={"input_"+item.index}
                                name={item.index}
                                type="text"
                                className="input__field"
                                spellCheck="false"
                                placeholder="Type your character's name"
                                onChange={handleInput}
                            />
                            <label
                                htmlFor={"input_"+item.index}
                                className="input__label"
                            >
                                {item.placeholder}
                            </label>

                        </div>
                    </span>
                ))  
            }
        </span>
    )
}
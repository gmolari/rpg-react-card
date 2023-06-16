import { useContext, useState } from "react"
import "../styles/characters/card-character.sass"
import { Context } from "../context/Context"

export default function CardCharacterRegister(){
    const [image, setImage] = useState()
    const {inputs, setInputs} = useContext(Context)

    function handleImage(e) {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.onload = () => {
            setImage(reader.result)
            setInputs((prevValue) => ({
                ...prevValue,
                imageChar: reader.result
            }))
        }

        if (file) {
            reader.readAsDataURL(file)
        }
        console.log(inputs)
    }

    return (
        <div className='div-img-character-register' >
            <label htmlFor="imgCharacterRegister">
                {
                    image ? <img src={image} alt="Avatar Image" /> :
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="black" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="uploadSvg">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="17 8 12 3 7 8"/>
                        <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                }
                
            </label>
            <input accept="image/*" onChange={handleImage} type="file" name='inpImgCharacterRegister' id='imgCharacterRegister'/>
        </div>
    )
}
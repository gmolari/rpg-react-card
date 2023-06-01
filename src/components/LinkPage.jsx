import { useEffect, useState } from "react"
import "./link.sass"
import { Link } from "react-router-dom"

export default function LinkHeader({name, newClass}){
    const [active, setActive] = useState(true)

    useEffect(() => {
        newClass ? '' : newClass = ''
    }, [])

    function trueActive(){
        console.log(active, 'teste')
        setActive(false)
    }

    function falseActive(){
        setActive(true)
    }

    return (
        <div className="div-page" onMouseEnter={trueActive} onMouseLeave={falseActive}>
            <Link className={"link-page "+newClass} to={"/"+name}>
                {name}
            </Link>
            <div hidden={active} className="div-line">
                <div hidden={active} className="line-link-page"></div>
                {/* <div className="line-link-page"></div> */}
            </div>
        </div>
    )
}
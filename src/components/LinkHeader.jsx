import "../styles/link.sass"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { Context } from "../context/Context"


export default function LinkHeader({name}){
    const [active, setActive] = useState(true)
    const {location} = useContext(Context)

    useEffect(() => {
        let aLocation = location.pathname.substring(1, location.length)
        if (name == aLocation) 
            setActive(false)
        else setActive(true)
    }, [location])

    return (
        <div className="div-link">
            <Link className={active ? "link active" : "link"} to={"/"+name}>
                <li className="li-header">
                    {name}
                </li>
            </Link>
            <div hidden={active} className="line-link"></div>
        </div>
    )
}
import "./header.sass"
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"


export default function LinkHeader({name}){
    const location = useLocation()
    const [active, setActive] = useState(true);
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
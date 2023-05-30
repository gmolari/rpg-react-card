import "./header.sass"
import { Link } from "react-router-dom"

export default function Header(){
    return  (
    <header className="main-header">
        <nav className="nav-header">
            <ul>
                <Link className="link" to="/home"> 
                    <li className="li-header">
                        Home 
                    </li>
                </Link>
                <Link className="link" to="/characters"> 
                    <li className="li-header">
                        Characters
                    </li> 
                </Link>
            </ul>
        </nav>
    </header>
    )
}
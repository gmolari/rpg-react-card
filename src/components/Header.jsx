import "./header.sass"
import logoDed from "../assets/imgs/ded-logo.png"
import LinkHeader from "./LinkHeader"

export default function Header(){

    return  (
    <header className="main-header">
        <div className="logo-header">
            <span> D&D CARD BUILDER</span>
            <div className="logo-div">
                <img src={logoDed} alt="Logo Dungeons and Dragons"/>
            </div>
        </div>
        <nav className="nav-header">
            <ul>
                <LinkHeader name={"home"}/>
                <LinkHeader name={"character"}/>
            </ul>
        </nav>
    </header>
    )
}
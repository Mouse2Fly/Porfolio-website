import { NavLink } from "react-router-dom"

import "./Header.css"

const Header = () => {

    return(
        <nav className="header">
            <h1 className="myname">{"Dovydas Navickas </>"}</h1>
            <div className="navdiv">
                <NavLink className="navbtn" to="/">About</NavLink>
                <NavLink className="navbtn" to="projects">Projects</NavLink>
                <NavLink className="navbtn" to="contacts">Contacts</NavLink>
            </div>
        </nav>
    )
}

export default Header
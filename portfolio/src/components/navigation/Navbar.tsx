import { NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import "./Navbar.css"

function Navbar(){
    return(
        <header className = "web-header">
            <nav className = "navbar">
                <NavLink to = "/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    Home
                </NavLink>
                <NavLink to = "/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    About
                </NavLink>
                <NavLink to = "/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    Projects
                </NavLink>
                <ThemeButton/>
            </nav>
        </header>
    );
}

export default Navbar;
import { NavLink } from "react-router-dom";

function Header() {
    return  <>
     
       <h5> Front End Web Developer</h5>
        <navbar>
        <ul className="nav nav-tabs">
            <li className="nav-item">
               <NavLink to="/" end>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" end>Contact</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/projects" end>Projects</NavLink>
            </li>
        </ul>
        </navbar>
   </>
}

export default Header;
import "./Navbar.scss"
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <section id="navbar">
            <div id="logo">
                <h1>DE</h1>
            </div>
            <div id="links">
                <Link to="/" className="Link">Home</Link>
                <Link to="/about" className="Link">About</Link>
                <Link to="/projects" className="Link">Projects</Link>
                <Link to="/articles" className="Link">Resume</Link>
                <p>Contact Me</p>
            </div>

        </section>
     );
}
 
export default Navbar;

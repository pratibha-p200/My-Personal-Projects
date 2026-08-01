import {Link} from "react-router-dom";


function Navbar() {
    return(
        <div className="navbar">
            <h2>My Blog</h2>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>

            </div>
        </div>
    );
}

export default Navbar;
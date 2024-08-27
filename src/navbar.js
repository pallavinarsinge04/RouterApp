import Navbar from "./Navbar.css"
function navbar(){
    return(
        <div className="navbar">
            <span className="name">
               
            </span>

            <div className="links">
                <link to="/"className="link">Home</link>
                <Link to="/About" className="link">About</Link>
                <Link to="/Contact" className="link">Contact</Link>
            </div>
        </div>
    )
}
export default navbar 

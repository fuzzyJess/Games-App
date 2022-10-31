import { Link } from "react-router-dom"

const NavBar = () => {
    return <nav><Link to={'/'}>Home</Link> | <Link to={'/reviews'}>Reviews</Link> | Categories | Comments | Sign in</nav>
}

export default NavBar
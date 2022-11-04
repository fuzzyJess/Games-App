import { Link } from "react-router-dom"

const NavBar = () => {
    return <nav><Link className="link" to={'/'}>Home</Link> <Link className="link" to={'/reviews'}>Reviews</Link> <Link className="link" to={'/categories'}>Categories</Link> Sign in</nav>
}

export default NavBar
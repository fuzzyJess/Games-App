import { Link } from "react-router-dom"

const NavBar = () => {
    return <nav><Link to={'/'}>Home</Link> | <Link to={'/reviews'}>Reviews</Link> | <Link to={'/categories'}>Categories</Link> | Comments | Sign in</nav>
}

export default NavBar
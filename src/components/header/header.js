import "./header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
            <div className='header d-flex container'>
                <Link to='/' className='header-logo'>Shop</Link>
                <ul className='header-list'>
                    <li className='header-list-item'>
                        <Link to='/' className='btn btn-secondary'>
                            Home
                        </Link>
                    </li>
                    <li className='header-list-item'>
                        <Link to='/about' className='btn btn-secondary'>
                            About us
                        </Link>
                    </li>
                    <li className='header-list-item'>
                        <Link to='/todo-app' className='btn btn-secondary'>
                            Search
                        </Link>
                    </li>
                    <li className='header-list-item'>
                        <Link to='/login' className='btn btn-dark'>
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
    )
}

export default Header;
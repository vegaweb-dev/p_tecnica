import { NavLink } from 'react-router-dom'
import './navbar.css'


const Navbar = () => {
    return (
        <div className='navbar-container'>
            <ul>

                <li>
                    <NavLink to='/login' className='NavLink'>Login Form</NavLink>
                </li>
                <li>
                    <NavLink to='/usuarios' className='NavLink'>List users in a table</NavLink>
                </li>
                <li>
                    <NavLink to='/crear' className='NavLink'>Create user using a Form</NavLink>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;
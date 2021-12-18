import CartWidget from './CartWidget.js'
import { Link, NavLink } from 'react-router-dom';

const itemNum = 0;

const Navbar = ({links}) => {

    function captalizeElementsString( string ) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            <NavLink to='/'>
                <h1>
                    <span>D</span>&<span>D</span> Fifth Edition
                </h1>
            </NavLink>
            <nav>
                <ul>
                    {links.map((element, index) => {
                        return <li><NavLink key={element.id} to={element.href}> {captalizeElementsString(element.name)} </NavLink></li>
                    })}
                </ul>
                < CartWidget itemNum='0' ></CartWidget>
            </nav>
        </>
    )
}

export default Navbar;